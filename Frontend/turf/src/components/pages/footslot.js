import React, { useState } from 'react';
import axios from 'axios';
import './slotchoose.css'; // Import your CSS file for styling

const Footslot = ({ name }) => {
  const [teamName, setTeamName] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedPaymentMode, setSelectedPaymentMode] = useState(''); // State for payment mode
  const [error, setError] = useState(''); // State for error handling

  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handlePaymentModeChange = (e) => {
    setSelectedPaymentMode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = localStorage.getItem('username'); // Retrieve username from localStorage

    if (!username) {
      setError('Username not found in local storage.');
      return;
    }

    axios.post('http://localhost:2000/api/bookings', {
      username,
      teamName,
      selectedDate,
      selectedTime,
    })
    .then(response => {
      alert("Booking Confirmed");
    })
    .catch(error => {
      console.error('There was an error making the booking:', error);
      setError('An error occurred while making the booking.'); // Set error message
    });
  };

  return (
    <div className="cricslot-container">
      <h3>{name}</h3> {/* Display the name passed as prop here */}
      {error && <div className="error">{error}</div>} {/* Display error message if any */}
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
              checked={selectedPaymentMode === 'gpay'}
              onChange={handlePaymentModeChange}
            />
            GPay
          </label>
          <label>
            <input
              type="radio"
              value="phonepe"
              checked={selectedPaymentMode === 'phonepe'}
              onChange={handlePaymentModeChange}
            />
            PhonePe
          </label>
          <label>
            <input
              type="radio"
              value="paytm"
              checked={selectedPaymentMode === 'paytm'}
              onChange={handlePaymentModeChange}
            />
            Paytm
          </label>
        </div>
      </div>
      <button className="submit-button" type="submit" onClick={handleSubmit}>Confirm to Book</button>
    </div>
  );
};

export default Footslot;
