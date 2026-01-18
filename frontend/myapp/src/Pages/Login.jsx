import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate();
  const [loginInfo, setloginInfo] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target;

    const copyloginInfo = { ...loginInfo }
    copyloginInfo[name] = value;
    setloginInfo(copyloginInfo)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const { email, password } = loginInfo;
    if (!email || !password) {
      alert('name, email, password is missing');
    }

    try {

      const url = 'http://localhost:8080/auth/login'
      await axios.post(url, JSON.stringify({ email, password }), {
        headers: { 'Content-Type': 'application/json' }
      }).then((res) => {
        localStorage.setItem('token', res.data.jwtToken)
        localStorage.setItem('loggedinUser', res.data.name)
        localStorage.setItem('id', res.data.employeeId)
        localStorage.setItem('role', res.data.role)
        console.log(res.data.name);
        alert('user loggedin')
        navigate('/home')
      })
    } catch (err) {
      alert('something went wrong ', err)
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "12px" }}>

        <h3 className="text-center mb-4">Login</h3>

        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={loginInfo.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoFocus
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={loginInfo.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

      </div>
    </div>

  )
}
