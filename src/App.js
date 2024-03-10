import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AddStudent from "./components/Add/AddStudent";
import DeleteStudent from "./components/Delete/DeleteStudent";
import UpdateStudent from "./components/Update/UpdateStudent";
import ViewStudentbyId from "./components/View/ViewStudentbyId";
import StudentList from "./components/List/StudentList";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/deletestudent" element={<DeleteStudent />} />
        <Route path="/updatestudent" element={<UpdateStudent />} />
        <Route path="/viewstudentbyid" element={<ViewStudentbyId />} />
        <Route path="/studentlist" element={<StudentList />} />
      </Routes>
    </Router>
  );
}

export default App;
