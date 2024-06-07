import React, { useState } from 'react';
import './ab.css'; // Import the CSS file

const aboutSections = [
  {
    title: 'Welcome',
    description: 'Welcome to Turf Hub, the ultimate destination for all your sports turf needs!'
  },
  {
    title: 'About Turf Hub',
    description: 'Turf Hub was created by G. Pragateesh, a passionate developer, with the help of ChatGPT, an AI language model, using the MERN (MongoDB, Express.js, React, Node.js) stack. Pragateesh is dedicated to providing a seamless experience for users seeking sports turf facilities and services.'
  },
  {
    title: 'Our Mission',
    description: 'At Turf Hub, we strive to connect sports enthusiasts with top-quality turf facilities, making it easier for individuals and teams to find and book their preferred turf venues. Whether you\'re a soccer player, a cricket enthusiast, or a fitness fanatic, Turf Hub has you covered!'
  },
  {
    title: 'User-Friendly Platform',
    description: 'Our platform offers a user-friendly interface, allowing you to search for turf facilities based on location, amenities, availability, and more. With Turf Hub, booking your next game or training session has never been easier.'
  },
  {
    title: 'Thank You',
    description: 'Thank you for choosing Turf Hub. We\'re here to enhance your sports experience and help you make the most out of your time on the turf!'
  }
];

const AboutUs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="about-container">
      <div className="about-title-container">
        <h1 className="about-title">About Us</h1>
      </div>

      <div className="welcome-card">
        <div
          className="about-card"
          onClick={() => setExpandedIndex(expandedIndex === 0 ? null : 0)}
        >
          <h1>{aboutSections[0].title}</h1>
          {(expandedIndex === 0 || expandedIndex === null) && (
            <div className="about-description">
              <p>{aboutSections[0].description}</p>
            </div>
          )}
        </div>
      </div>

      <div className="about-grid">
        {aboutSections.slice(1, -1).map((section, index) => (
          <div
            className="about-card"
            key={index + 1}
            onClick={() => setExpandedIndex(expandedIndex === index + 1 ? null : index + 1)}
          >
            <h1>{section.title}</h1>
            {(expandedIndex === index + 1 || expandedIndex === null) && (
              <div className="about-description">
                <p>{section.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="thankyou-card">
        <div
          className="about-card"
          onClick={() => setExpandedIndex(expandedIndex === aboutSections.length - 1 ? null : aboutSections.length - 1)}
        >
          <h1>{aboutSections[aboutSections.length - 1].title}</h1>
          {(expandedIndex === aboutSections.length - 1 || expandedIndex === null) && (
            <div className="about-description">
              <p>{aboutSections[aboutSections.length - 1].description}</p>
            </div>
          )}
        </div>
      </div>

      <footer className="about-footer">
        <p>&copy; {new Date().getFullYear()} Turf Hub. All rights reserved.</p>
        <p>Contact us: pragateesh.g2022ai-ds@sece.ac.in</p>
        <p>Address: 123 Turf Street, Sportscity, SC 12345</p>
      </footer>
    </div>
  );
};

export default AboutUs;
