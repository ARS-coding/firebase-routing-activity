import React from "react";
// You will be able to use this, when you paste your firestore configs inside the firebaseConfig.js file
import db from "../firebaseConfig";
import HomeForm from "./HomeForm";
const Home = () => {
  return (
    <div className="home-wrapper">
      <h1>Home</h1>
      <HomeForm />
    </div>
  ) 
};

export default Home;