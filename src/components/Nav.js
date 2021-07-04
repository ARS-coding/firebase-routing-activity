import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>     
      <NavLink to="/users">Users</NavLink>     
      <NavLink to="/about">About</NavLink>     
      <NavLink to="/contact-us">Contact Us</NavLink>     
    </nav>
  )
};

export default Nav;