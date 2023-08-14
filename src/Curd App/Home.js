import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3030/users")
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, []);

  return (
    <div classsName='container mt-5'>
      <h2>Crud App with Json Server</h2>
      <Link to="/create" className='btn btn-success my-3'>Create +</Link>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, idx) => (
              <tr key={idx}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                  <button>Read</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
