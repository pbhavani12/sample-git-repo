import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa"; // Importing the login icon

const Home = () => {
  return (
    <div>
      <h2>Welcome to Student Management System</h2>
      <p>This is the home page of the Student Management System.</p>
      <p>Use the navigation above to manage students.</p>
      {/* Link to the login page with the login icon */}
      <p>
        Don't have an account? <Link to="/register">Register</Link> |
        <Link to="/login">
          {" "}
          <FaSignInAlt /> Login
        </Link>
      </p>
    </div>
  );
};

export default Home;
