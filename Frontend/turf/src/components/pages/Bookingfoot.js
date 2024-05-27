import React from 'react';
import { useLocation } from 'react-router-dom';
 // Optional: Add styling for this component

const BookingDetails = () => {
  const location = useLocation();
  const { teamName, selectedDate, selectedTime } = location.state || {};

  return (
    <div className="booking-details-container">
      <h2>Booking Details</h2>
      <p><strong>Team Name:</strong> {teamName}</p>
      <p><strong>Date:</strong> {selectedDate}</p>
      <p><strong>Time:</strong> {selectedTime}</p>
    </div>
  );
};

export default BookingDetails;
