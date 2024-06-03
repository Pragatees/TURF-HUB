import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cf.css";

function Football() {
  const [searchTerm, setSearchTerm] = useState("");

  const sportsData = [
    {
      name: "CFC Sports",
      location: "Kinatukidavu",
      phone: "34567891",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Hpzt51w7kXodIbJWhWymD9bGiMWxE2ftiAVz8Fh5B2UIoFK6Fpw3EksGnrzNKP75TDY&usqp=CAU",
    },
    {
      name: "KFC Sports",
      location: "Vadasithur",
      phone: "34567891",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGsKWVniK32Rh6RMd710BnhzfoaPT0wBzCmiA1Wt0KnDlzi82WXEwIKel46qPmkc-bzY&usqp=CAU",
    },
    {
      name: "CSK Sports",
      location: "Kondampatti",
      phone: "34567891",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_hxvJNOP8nZI7cM0MpCrQAula4NMisDXNNQ&s",
    },
    // Add 7 more details
    {
      name: "ABC Sports",
      location: "Location1",
      phone: "12345678",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "DEF Sports",
      location: "Location2",
      phone: "23456789",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "GHI Sports",
      location: "Location3",
      phone: "34567890",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "JKL Sports",
      location: "Location4",
      phone: "45678901",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "MNO Sports",
      location: "Location5",
      phone: "56789012",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "PQR Sports",
      location: "Location6",
      phone: "67890123",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "STU Sports",
      location: "Location7",
      phone: "78901234",
      image: "https://via.placeholder.com/150",
    },
  ];

  const filteredSports = sportsData.filter((sport) =>
    sport.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Football</title>
      <div id="sidebar">
        <nav className="custom-nav">
          <ul>
            <li>
              <Link to="/home">Home...🏠</Link>
            </li>
            <li>
              <Link to="/cricket">Cricket...🏏</Link>
            </li>
            <li>
              <Link to="/profile">Profile...👤</Link>
            </li>
            <li>
              <Link to="/">Log-Out</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="header">
        <h1>Football</h1>
        <input
          type="text"
          placeholder="Search..."
          className="search-box"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div id="middle">
        {filteredSports.map((sport, index) => (
          <div className="card" key={index}>
            <img src={sport.image} alt={sport.name} />
            <h3>{sport.name}</h3>
            <p>Location: {sport.location}</p>
            <p>Phone No: {sport.phone}</p>
            <Link
              to={{
                pathname: "/footslot",
                state: { name: sport.name, image: sport.image },
              }}
              style={{ textDecoration: "none" }}
            >
              <button className="book-now-btn">Book Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Football;
