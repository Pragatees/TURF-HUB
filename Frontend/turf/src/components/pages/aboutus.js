// AboutUs.js

import React from 'react';
import './ab.css'; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-header">About Us</h1>
      <div className="about-content">
        <p>Welcome to Turf Hub, the ultimate destination for all your sports turf needs!</p>
        <p>
          Turf Hub was created by G. Pragateesh, a passionate developer, with the help of ChatGPT, an AI language model,
          using the MERN (MongoDB, Express.js, React, Node.js) stack. Pragateesh is dedicated to providing a seamless
          experience for users seeking sports turf facilities and services.
        </p>
        <p>
          At Turf Hub, we strive to connect sports enthusiasts with top-quality turf facilities, making it easier for
          individuals and teams to find and book their preferred turf venues. Whether you're a soccer player, a cricket
          enthusiast, or a fitness fanatic, Turf Hub has you covered!
        </p>
        <p>
          Our platform offers a user-friendly interface, allowing you to search for turf facilities based on location,
          amenities, availability, and more. With Turf Hub, booking your next game or training session has never been
          easier.
        </p>
        <p>
          Thank you for choosing Turf Hub. We're here to enhance your sports experience and help you make the most out of
          your time on the turf!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
