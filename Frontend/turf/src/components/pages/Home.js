import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <h1 className="navbar-brand">Truf Booking</h1>
        <ul className="navbar-links">
          <li>
            <Link to="/profile">
              <span role="img" aria-label="face">👤</span> My Profile
            </Link>
          </li>
          <li>
            <Link to="/booking-details">My Bookings</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
      <div className="benefits-container">
        <div className="back">
          <div id="header">
            <h1 className="h1">Truf Booking</h1>
          </div>
          <p className="benefits-paragraph">
            Turf cricket offers numerous benefits, including a consistent playing surface, reduced risk of injury, and all-weather playability. It provides a professional playing experience with less maintenance compared to natural grass, making it ideal for players of all levels.
          </p>
          <div className="cards-row">
            <div className="card">
              <img src="https://media.hudle.in/photos/47296" alt="Cricket" className="card-image" />
              <h3>Cricket</h3>
              <p>Enjoy the best cricket experience with our state-of-the-art turf pitch. Perfect for all skill levels and weather conditions.</p>
              <Link to="/cricket">
                <button className="book-now-button">See More...!</button>
              </Link>
            </div>
            <div className="card">
              <img src="https://media.hudle.in/photos/12345" alt="Football" className="card-image" />
              <h3>Football</h3>
              <p>Play football on our premium turf field, designed to provide optimal performance and safety for players.</p>
              <Link to="/football">
                <button className="book-now-button">See More...!</button>
              </Link>
            </div>
          </div>
        </div>
        <Link to="/">
          <center>
            <button type="submit">Log-Out</button>
          </center>
        </Link>
      </div>
    </div>
  );
};

export default Home;
