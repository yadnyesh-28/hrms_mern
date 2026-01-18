import axios from 'axios';
import '../App.css';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Employees from './Employees';
import Employee from './Employee';

export default function Home() {
  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();
  const role=localStorage.getItem('role')
  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedinUser'))
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('loggedinUser')
    navigate('/login')
  }
  const fetchProduct = async () => {
    try {
      const url = 'http://localhost:8080/product'
      await axios.get(url, { headers: { 'authorization': localStorage.getItem('token') } }).then((res) => {
        console.log(res.data);
      })

    } catch (err) {
      alert('somwthing went wrong ', err)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [])
  return (
    <div>
      <div className="header-bar">
        <h4>Welcome {loggedInUser} !</h4>
        {/* <Employee/> */}
      </div>
      {role === "Admin" && <Employees />}
    </div>

  )
}
