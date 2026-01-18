import React, { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default function Signup() {

    const [signUpInfo, setsignUpInfo] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name,value);
        const copysignUpInfo = { ...signUpInfo }
        copysignUpInfo[name] = value;
        setsignUpInfo(copysignUpInfo)
    }
    // console.log('signUpInfo -> ', signUpInfo);
    const handleSignup = async (e) => {
       e.preventDefault()
        const { name, email, password } = signUpInfo;
        if (!name || !email || !password) {
             alert('name, email, password is missing');
        }

        try {

            const url = 'http://localhost:8080/auth/signup'
            await axios.post(url, JSON.stringify({ name, email, password }), {
                headers: { 'Content-Type': 'application/json' }
            }).then((res) => {
                console.log(res.data);
                alert('user registered')
            })
        } catch (err) {
            alert('something went wrong ', err)
        }
    }

    return (
       <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
  <div className="card shadow-lg p-4" style={{ width: "420px", borderRadius: "12px" }}>

    <h3 className="text-center mb-4">Signup</h3>

    <form onSubmit={handleSignup}>
      <div className="form-group mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={signUpInfo.name}
          onChange={handleChange}
          placeholder="Enter your name"
          autoFocus
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={signUpInfo.email}
          onChange={handleChange}
          placeholder="Enter your email"
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
          value={signUpInfo.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
      </div>

      <button type="submit" className="btn btn-primary w-100 mb-3">
        Create Account
      </button>

      <div className="text-center">
        <small>
          Already registered? <Link to="/login">Login</Link>
        </small>
      </div>
    </form>

  </div>
</div>

    )
}
