import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './profile.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Retrieve the username from localStorage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);

      // Fetch user data from the server
      axios.get(`http://localhost:2000/getusers?username=${storedUsername}`)
        .then(response => {
          if (response.data.length > 0) {
            setUserData(response.data[0]);
          } else {
            setError('User not found.');
          }
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
          setError('An error occurred while fetching user data.');
        });
    } else {
      setError('Username not found in local storage.');
    }
  }, []);

  if (error) {
    return <div className="profile-container error">Error: {error}</div>;
  }

  if (!userData) {
    return <div className="profile-container loading">Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="welcome-message">
        <h1>Welcome, {userData.username}!</h1>
      </div>
      <div className="profile-details-box">
        <p>Name: {userData.username}</p>
        <p>Email: {userData.email}</p>
        <p>Password: {userData.password}</p>
        {/* Add more fields as needed */}
        <div>
          <Link to='/booking-details'>
            <button>My Bookings...</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
