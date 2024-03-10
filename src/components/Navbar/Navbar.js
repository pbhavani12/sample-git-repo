import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons"; 
import { faHome } from "@fortawesome/free-solid-svg-icons";// Importing the login icon
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faHome} /> {/* Home icon */}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/addstudent" className="nav-link">
            Add Student
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/studentlist" className="nav-link">
            Student List
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/updatestudent" className="nav-link">
            Update Student
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/deletestudent" className="nav-link">
            Delete Student
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/viewstudentbyid" className="nav-link">
            View Student by ID
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login <FontAwesomeIcon icon={faSignInAlt} /> {/* Login icon */}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
