import React from "react";

const User = ({userData}) => {
  return (
    <div className="user-wrapper">
      <p>{userData.username}</p>
      <p>{userData.email}</p>
      <p>{userData.password}</p>
    </div>
  );
};

export default User;
