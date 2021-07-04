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

  // Users Operations START
    const [allUserElements, setAllUserElements] = useState();

    useEffect(() => { // fetch users once before the person creates a user
      db.collection("users").get().then(snapshot => {
        const docs = snapshot.docs;
        const currentElements = docs.map((doc) => <User key={doc.id} userData={doc.data()} />); // turn them into JSX
        setAllUserElements(currentElements); // set all the JSX that's in the array to allUserElements
      })
    }, [])
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
    }
  // Form Operations END


  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/users">
          <Users allUserElements={allUserElements} />
        </Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/contact-us"><ContactUs /></Route>
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
