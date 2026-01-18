import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Employee({ id }) {
  const [user, setUser] = useState('')

  const fetchProduct = async () => {
    try {
      const url = `http://localhost:8080/admin/get-employee/${id}`
      await axios.get(url, {
        headers: {
          'authorization': localStorage.getItem('token'),
          'role': localStorage.getItem('role')
        }
      }).then((res) => {
        setUser(res.data)
        console.log(res.data);
      })

    } catch (err) {
      alert('something went wrong ', err)
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [])

  return (
    <div>
      <h6>{user.name} are logged in</h6>
      

    </div>
  )
}

