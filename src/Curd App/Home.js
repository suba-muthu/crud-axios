import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3030/users/")
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, []);

  function handleDelete(id) {
    const confirm = window.confirm('Do you like to Delete the data?');
    if(confirm) {
      axios.delete("http://localhost:3030/users/" + id)
      .then(res => {
        alert("data deleted")
        navigate("/")
      })
    }
  }

  return (
    <div classsName='container mt-5'>
      <h2 className='text-center mt-3'>Crud App with Json Server</h2>
      <Link to="/create" className='btn btn-success my-4' style={{ marginLeft: '63rem' }}>Create +</Link>
      <table className='table table-bordered'>
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
                  <Link className='text-decoration-none btn btn-sm px-3 btn-success' to={`/edit/${item.id}`}>Edit</Link>
                  <button className='btn btn-sm btn-danger mx-2' onClick={e => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
