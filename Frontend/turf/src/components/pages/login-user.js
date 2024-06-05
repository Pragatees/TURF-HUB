// src/LoginPage.js
import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './Login-user.css';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios.post('http://localhost:2000/login', { username, password })
      .then(response => {
        console.log(response);
        if (response.data) { 
          // Store the username in localStorage
          localStorage.setItem('username', username);
  
          alert('Welcome ' + username);
          window.location.href = '/home';
        } else {
          setError('Login failed. Please check your credentials.'); // Set error message
        }
      })
      .catch(error => {
        console.error(error);
        setError('An error occurred during login. Please try again later.'); // Set error message
      });
  }

  return (
    <div className="login-background">
      <div className="login-box">
      <img
          src="https://yt3.googleusercontent.com/ytc/AIdro_mHDZ7TUM7e7JEMZkHRfojLVMprFQeK47Uh0COySeCHoWo=s900-c-k-c0x00ffffff-no-rj"
          alt="Logo"
          className="sidebar-logo"
          style={{ width: "100px", height: "100px", borderRadius: "50%", margin: "20px auto", display: "block" }}
        />
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}> {/* Handle form submission */}
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to='/sign'>Create Account</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
