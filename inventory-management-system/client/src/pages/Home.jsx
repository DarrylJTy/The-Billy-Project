import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout'

function Home() {
    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');
    
    useEffect(() => {
        axios.post('http://localhost:8001', { withCredentials: true})
        .then(res => {
            if(res.data.Status === "Success") {
                setAuth(true);
                console.log(res.data.Status);
                setUsername(res.data.username);
                navigate('/login');
            } else {
                setAuth(false);
                console.log(res.data.Status);   
                setMessage(res.data.Error);
            }
        })
        .then(err => console.log(err));
    })

    const handleDelete = () => {
        axios.get('http://localhost:8001/logout')
        .then(res => {
            location.reload(true);
        }).catch(err => console.log(err));
    }

  return (
        <Layout>
        {
            auth ?
            <div>
                <h3>You are authorized --- {username}</h3>
                <button className='btn btn-danger' onClick={handleDelete}>Logout</button>
            </div>
            :
            <div>
                <h3>{message}</h3>
                <h3>Login Now</h3>
                <Link to="/login" className='btn btn-success'>Login</Link>
            </div>
        }
        </Layout>
  );
}

export default Home;
