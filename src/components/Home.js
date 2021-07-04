import React from "react";

import HomeForm from "./HomeForm";

const Home = ({ formData, handleFormSubmit, handleFormChange }) => {
  return (
    <div className="home-wrapper">
      <h1>Home</h1>
      <HomeForm 
        formData={formData}
        handleFormSubmit={handleFormSubmit} 
        handleFormChange={handleFormChange} 
      />
    </div>
  ) 
};

export default Home;