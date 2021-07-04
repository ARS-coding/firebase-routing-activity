import React from "react";

const User = ({ userData, handleDeleteButtonClick }) => { // the id of each individual user on firestore is their username
  return (
    <div className="user-wrapper">
      <p>{userData.username}</p>
      <p>{userData.email}</p>
      <p>{userData.password}</p>
      <button 
        id={userData.username}
        onClick={handleDeleteButtonClick}
      >X</button>
      <hr/>
    </div>
  );
};

export default User;
