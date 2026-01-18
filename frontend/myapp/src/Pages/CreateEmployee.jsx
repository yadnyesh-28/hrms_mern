import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



export default function CreateEmployee() {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    employeeId: '',
    name: "",
    email: "",
    password: '',
    role: '',
    department: "",
    salary: "",
    joiningDate: '',
    status: ""
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `http://localhost:8080/auth/signup`,
        employee,
        {
          headers: {
            authorization: localStorage.getItem("token"),
            role: localStorage.getItem("role"),
          },
        }
      ).then((res) => {
        console.log('success response ', res.data);

      })
      alert("Employee created successfully");
      navigate("/home");
    } catch (error) {
      console.error(error);
      if (error.response) {
        alert(error.response.data.message || "Update failed");
      }
      else if (error.request) {
        alert("Server not responding. Please try again later.");
      }
      else {
        alert("Something went wrong.");
      }
    }
  };


  return (
    <div className="container d-flex justify-content-center mt-4">
      <div className="card shadow-sm" style={{ width: "420px" }}>

        <div className="card-header bg-success text-white py-2">
          <h6 className="mb-0 text-center">Create Employee</h6>
        </div>

        <div className="card-body p-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="form-label small">Employee Id</label>
              <input
                type="text"
                name="employeeId"
                className="form-control form-control-sm"
                value={employee.employeeId}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-2">
              <label className="form-label small">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-sm"
                value={employee.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-2">
              <label className="form-label small">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-sm"
                value={employee.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-2">
              <label className="form-label small">Password</label>
              <input
                type="text"
                name="password"
                className="form-control form-control-sm"
                value={employee.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label small">Role</label>
              <select
                name="role"
                className="form-select form-select-sm"
                value={employee.role}
                onChange={handleChange}
                required
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Employee">Employee</option>
              </select>
            </div>

            <div className="mb-2">
              <label className="form-label small">Department</label>
              <input
                type="text"
                name="department"
                className="form-control form-control-sm"
                value={employee.department}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-2">
              <label className="form-label small">Salary</label>
              <input
                type="number"
                name="salary"
                className="form-control form-control-sm"
                value={employee.salary}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-2">
              <label className="form-label small">Date</label>
              <input
                type="date"
                name="joiningDate"
                className="form-control form-control-sm"
                value={employee.joiningDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label small">Status</label>
              <select
                name="status"
                className="form-select form-select-sm"
                value={employee.status}
                onChange={handleChange}
                required
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="d-flex justify-content-between">
              <button className="btn btn-success btn-sm px-3" type="submit">
                Create
              </button>

              <button
                type="button"
                className="btn btn-outline-secondary btn-sm px-3"
                onClick={() => navigate("/employees")}
              >
                Cancel
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
