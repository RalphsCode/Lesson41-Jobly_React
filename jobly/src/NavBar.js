import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/companies">Companies</Link>
    <Link to="/jobs">Jobs</Link>
    <Link to="/profile">Profile</Link>
  </nav>
);

export default NavBar;
