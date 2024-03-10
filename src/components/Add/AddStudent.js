import React, { useState } from "react";
import "./AddStudent.css";

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    grade: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8082/admin/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Student created successfully:", data);
        // Reset form
        setStudent({
          name: "",
          email: "",
          age: "",
          gender: "",
          grade: "",
        });
        window.location.href = "/studentlist"; // Navigate to student list
      })
      .catch((error) => {
        console.error("Error creating student:", error);
      });
  };

  return (
    <div className="add-student-container">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            placeholder="Enter the Name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            placeholder="Enter the Email"
            required
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={student.age}
            onChange={handleChange}
            placeholder="Enter the Age"
            required
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <input
            type="text"
            name="gender"
            value={student.gender}
            onChange={handleChange}
            placeholder="Enter the Gender"
            required
          />
        </div>
        <div className="form-group">
          <label>Grade</label>
          <input
            type="text"
            name="grade"
            value={student.grade}
            onChange={handleChange}
            placeholder="Enter the Grade"
            required
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
