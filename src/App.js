import React from "react";
import {Switch, Route} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Nav from "./components/Nav";
import Users from "./components/Users";


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/users"><Users /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/contact-us"><ContactUs /></Route>
        <Route><Home exact path="/" /></Route>
      </Switch>
    </div>
  );
}

export default App;
