// NavbarAdmin.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavbarAdmin.css";

const NavbarAdmin = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addstudent">Add Student</Link>
        </li>
        <li>
          <Link to="/deletestudent">Delete Student</Link>
        </li>
        {/* Add more admin-specific links as needed */}
      </ul>
    </nav>
  );
};

export default NavbarAdmin;
