// src/SignupPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import axios from 'axios';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:2000/users', { username, email, password})
      .then(result => {
         console.log(result);
         window.location.href = '/';
         alert('welcome ' + username)
      
        
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="signup-background">
        
        
      <div className="signup-box">
      <img
          src="https://yt3.googleusercontent.com/ytc/AIdro_mHDZ7TUM7e7JEMZkHRfojLVMprFQeK47Uh0COySeCHoWo=s900-c-k-c0x00ffffff-no-rj"
          alt="Logo"
          className="sidebar-logo"
          style={{ width: "100px", height: "100px", borderRadius: "50%", margin: "20px auto", display: "block" }}
        />
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" onClick={handleSubmit}>Sign Up</button>
        </form>
        <p>Already have an account? <Link to='/'>Login</Link></p>
      
      </div>
    </div>
  );
};

export default SignupPage;
