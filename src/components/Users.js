import React from "react";

const Users = ({ allUserElements }) => {
  return (
    <div className="users-wrapper">
      <h1>Users</h1>
      {allUserElements}
    </div>
  );
};

export default Users;
