// NavbarStudent.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavbarStudent.css";

const NavbarStudent = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/viewstudentbyid">View Student by ID</Link>
        </li>
        
        {/* Add more student-specific links as needed */}
      </ul>
    </nav>
  );
};

export default NavbarStudent;
