import React, { useState, useEffect } from "react";
import {Switch, Route} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Nav from "./components/Nav";
import Users from "./components/Users";
import User from "./components/User";

import db from "./firebaseConfig";

function App() {

  const [isDataChanged, setIsDataChanged] = useState(false);

  // Users Operations START
    const [allUserElements, setAllUserElements] = useState();

    useEffect(() => { // fetch users for once, before the person creates a user
      db.collection("users").get().then(snapshot => {
        const docs = snapshot.docs;
        const currentElements = docs.map((doc) => {
          return (
          <User 
            key={doc.id}
            userData={doc.data()}
            handleDeleteButtonClick={handleDeleteButtonClick}
          />
          )
        }); // turn them into JSX
        setAllUserElements(currentElements); // set all the JSX that's in the array to allUserElements
      })
      .catch(error => console.error("Error getting document: ", error))
    }, [])

    useEffect(() => { // whenever there's a change on the "users" collection i nthe server, mirror those changes to UI by cahngingthe allUserElements state
      db.collection("users").onSnapshot(snapshot => {
        let currentElements = [];
        snapshot.forEach((doc) => {
          currentElements.push(
            <User 
              key={doc.id}
              userData={doc.data()}
              handleDeleteButtonClick={handleDeleteButtonClick}
            />
          )
        }); // turn them into JSX
        setAllUserElements(currentElements); // set all the JSX that's in the array to allUserElements
      })
    }, [isDataChanged])

    function handleDeleteButtonClick(event) { // it's gonna delete the individual user document from firestore
      const firestoreDocId = event.target.id;
      db.collection("users")
      .doc(firestoreDocId)
      .delete()
      .then(() => { setIsDataChanged(!isDataChanged) })
      .then(() => { console.log("Your document succesfully deleted!")}) 
      .catch((error) => console.error("Error removing documnet: ", error))
    }
  // Users Operations END

  // Form Operations START
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: ""
    });

    function handleFormChange(event) {
      setFormData({...formData, [event.target.name]: event.target.value});
    };

    function handleFormSubmit(event) {
      event.preventDefault();
      db.collection("users").doc(formData.username).set(formData);
      setIsDataChanged(!isDataChanged);
      console.log("submitted")
    }
  // Form Operations END


  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/users">
          <Users 
            allUserElements={allUserElements}
          />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact-us">
          <ContactUs />
        </Route>
        <Route>
          <Home 
            exact
            path="/"
            formData={formData}
            handleFormSubmit={handleFormSubmit} 
            handleFormChange={handleFormChange}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
