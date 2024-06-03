import React, { useState } from 'react';
import axios from 'axios';
import './slotchoose.css';

const Cricslot = (props) => {
  const { name, image } = props.location.state || {}; // Retrieve the name and image from props.location.state
  const [teamName, setTeamName] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [error, setError] = useState('');

  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = localStorage.getItem('username');

    if (!username) {
      setError('Username not found in local storage.');
      return;
    }

    axios.post('http://localhost:2000/api/bookings', {
      username,
      teamName,
      selectedDate,
      selectedTime,
      name,  
      image  
    })
    .then(response => {
      alert("Booking Confirmed");
      window.location.href = "/booking-details";
    })
    .catch(error => {
      console.error('There was an error making the booking:', error);
      setError('An error occurred while making the booking.');
    });
  };

  return (
    <div className="cricslot-container">
      <h3>{name}</h3>
      {image && <img src={image} alt={name} />} {/* Display the image */}
      {error && <div className="error">{error}</div>}
      <div className="input-box">
        <label htmlFor="teamName">Team Name:</label>
        <input
          type="text"
          id="teamName"
          value={teamName}
          onChange={handleTeamNameChange}
          required
        />
      </div>
      <div className="input-box">
        <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          required
        />
      </div>
      <div className="input-box">
        <p>Select Time Slot:</p>
        <div className="time-slots">
          <button type="button" onClick={() => handleTimeSelection('10:00 AM - 12:00 PM')}>10:00 AM - 12:00 PM</button>
          <button type="button" onClick={() => handleTimeSelection('12:00 PM - 2:00 PM')}>12:00 PM - 2:00 PM</button>
          <button type="button" onClick={() => handleTimeSelection('2:00 PM - 4:00 PM')}>2:00 PM - 4:00 PM</button>
          <button type="button" onClick={() => handleTimeSelection('4:00 PM - 6:00 PM')}>4:00 PM - 6:00 PM</button>
          <button type="button" onClick={() => handleTimeSelection('6:00 PM - 8:00 PM')}>6:00 PM - 8:00 PM</button>
          <button type="button" onClick={() => handleTimeSelection('8:00 PM - 10:00 PM')}>8:00 PM - 10:00 PM</button>
        </div>
      </div>
      <div className="input-box">
        <p>Select Payment Mode:</p>
        <div className="payment-modes">
          <label>
            <input
              type="radio"
              value="gpay"
              name="paymentMode"
            />
            GPay
          </label>
          <label>
            <input
              type="radio"
              value="phonepe"
              name="paymentMode"
            />
            PhonePe
          </label>
          <label>
            <input
              type="radio"
              value="paytm"
              name="paymentMode"
            />
            Paytm
          </label>
        </div>
      </div>
      <button className="submit-button" type="submit" onClick={handleSubmit}>Confirm to Book</button>
    </div>
  );
};

export default Cricslot;
