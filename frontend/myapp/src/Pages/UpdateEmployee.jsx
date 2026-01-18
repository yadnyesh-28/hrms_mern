import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateEmployee() {

  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
    status: ""
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(
        `http://localhost:8080/admin/edit-employee/${id}`,
        employee,
        {
          headers: {
            authorization: localStorage.getItem("token"),
            role: localStorage.getItem("role"),
          },
        }
      );
      alert("Employee updated successfully");
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

        <div className="card-header bg-primary text-white py-2">
          <h6 className="mb-0 text-center">Update Employee</h6>
        </div>

        <div className="card-body p-3">
          <form onSubmit={handleSubmit}>

            <div className="mb-2">
              <label className="form-label small">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-sm"
                value={employee.name}
                onChange={handleChange}
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
              />
            </div>

            <div className="mb-2">
              <label className="form-label small">Department</label>
              <input
                type="text"
                name="department"
                className="form-control form-control-sm"
                value={employee.department}
                onChange={handleChange}
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
              />
            </div>

            <div className="mb-3">
              <label className="form-label small">Status</label>
              <select
                name="status"
                className="form-select form-select-sm"
                value={employee.status}
                onChange={handleChange}
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="d-flex justify-content-between">
              <button className="btn btn-success btn-sm px-3" type="submit">
                Update
              </button>

              <button
                type="button"
                className="btn btn-outline-secondary btn-sm px-3"
                onClick={() => navigate("/home")}
              >
                Cancel
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>

  )
}
