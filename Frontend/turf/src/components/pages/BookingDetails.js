import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './book.css';

const BookingDetails = () => {
  const username = localStorage.getItem('username'); // Retrieve username from localStorage
  const [bookingDetails, setBookingDetails] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (username) {
      axios.get(`http://localhost:2000/api/bookings?username=${username}`)
        .then(response => {
          if (response.data && response.data.length > 0) {
            setBookingDetails(response.data);
          } else {
            setError('No booking details found for this user.');
          }
        })
        .catch(error => {
          console.error('Error fetching booking details:', error);
          setError('An error occurred while fetching booking details.');
        });
    } else {
      setError('Username not found in local storage.');
    }
  }, [username]);

  if (error) {
    return <div className="booking-details-container"><p>Error: {error}</p></div>;
  }

  if (bookingDetails.length === 0) {
    return <div className="booking-details-container"><p>Loading...</p></div>;
  }

  return (
    <div className="background">
      <div className="booking-details-container">
        <h1>Booking Details</h1>
        <div className="booking-cards-container">
          {bookingDetails.map((booking, index) => (
            <div key={index} className="booking-card">
              {booking.image && <img src={booking.image} alt="Booking" />}
              <p><strong>Location:</strong>{booking.name}</p>
              <p><strong>Name:</strong> {booking.username}</p>
              <p><strong>Team Name:</strong> {booking.teamName}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Time:</strong> {booking.time}</p>
              
            </div>
          ))}
        </div>
      </div>
      <div className="home-button-container">
        <Link to='/home'>
          <button className="home-button">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default BookingDetails;
