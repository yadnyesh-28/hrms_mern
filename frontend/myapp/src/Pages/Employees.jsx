import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import DeleteEmployeeModal from './DeleteEmployee';



export default function Employees() {
  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();
  const [emps, setEmps] = useState([]);
  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedinUser'))
  }, [])

  const [showDelete, setShowDelete] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const openDelete = (emp) => {
    setSelectedEmployee(emp);
    setShowDelete(true);
  };


  const fetchEmployees = async () => {
    try {
      const url = 'http://localhost:8080/admin/get-employee'
      await axios.get(url, { headers: { 'authorization': localStorage.getItem('token'), 'role': localStorage.getItem('role') } }).then((res) => {

        if (localStorage.getItem('role') === 'Admin') {
          setEmps(res.data.data);
          console.log(res.data);
        } else {
          navigate('/emp')
        }
      })

    } catch (err) {
      alert('somwthing went wrong ', err)
    }
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  return (
    <>
      <div className="d-flex justify-content-end pe-4 ">
        <Link className="btn btn-success me-4" to='/create'>
          Create Employee
        </Link>
      </div>
      <div className="container mt-2">
        <div className="card shadow-sm">

          <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Employees</h5>

          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Id</th>
                    <th>Employee Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Status</th>
                    <th className="text-center">Edit</th>
                    <th className="text-center">Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {emps && emps.map((emp) => (
                    <tr key={emp.employeeId}>
                      <td>{emp.employeeId}</td>
                      <td className="fw-semibold">{emp.name}</td>
                      <td>{emp.email}</td>
                      <td>{emp.department}</td>
                      <td>
                        <span
                          className={`badge ${emp.status === "Active"
                            ? "bg-success"
                            : "bg-secondary"
                            }`}
                        >
                          {emp.status}
                        </span>
                      </td>
                      <td className="text-center">
                        <Link to={`/edit/${emp.employeeId}`} >
                          <button className="btn btn-sm btn-outline-primary">
                            Update
                          </button>
                        </Link>
                      </td>
                      <td className="text-center">
                        <button className="btn btn-sm btn-outline-danger" onClick={()=>openDelete(emp)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          </div>
          <DeleteEmployeeModal
            isOpen={showDelete}
            employee={selectedEmployee}
            onClose={() => setShowDelete(false)}
            onDeleted={'/home'}
          />

        </div>
      </div>
    </>

  )
}
