import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './cf.css';
function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const sportsData = [
    {
      name: "CSK Sports",
      location: "Kinatukidavu",
      phone: "34567891",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsMKReWWFWK7Lwq4TDZi3ovLST1ANMCZgvA&s"
    },
    {
      name: "RR Sports",
      location: "Vadsithur",
      phone: "345678345",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlumi_ozxAbiTX7meXxY8P2qhaij82wnrazg&s"
    },
    {
      name: "MI Sports",
      location: "Kondampatti",
      phone: "34567891235",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTESfeboAzeyBBanPvmix5HWBZLcEXbi4r7zA&s"
    },
    {
      name: "PBKS SPORTS",
      location: "Kondampatti",
      phone: "12345678",
      image: "https://www.shutterstock.com/image-vector/cricket-batsman-line-drawing-vector-600nw-2121338954.jpg"
    },
    {
      name: "KKR SPORTS",
      location: "Chennai",
      phone: "98765432",
      image: "https://www.shutterstock.com/image-illustration/colorful-abstract-cricket-player-illustration-600nw-2041949372.jpg"
    },
    {
      name: "DC SPORTS",
      location: "Mumbai",
      phone: "87654321",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi9hfauwbs7Mfc3TxBdxFKDqGmFPjr8ow3mQ&s"
    },
    {
      name: "SRH SPORTS",
      location: "Delhi",
      phone: "76543210",
      image: "https://wallpapercave.com/wp/wp1809750.jpg"
    },
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
    }
    ,
    {
      name: "IFC Football",
      location: "Delhi",
      phone: "76543210",
      image: "https://cdn.vectorstock.com/i/1000v/34/30/funny-cartoon-football-player-kicking-the-ball-vector-44403430.jpg"
    },
    {
      name: "AFC Football",
      location: "Kinatukidavu",
      phone: "34567891",
      image:
        "https://media.istockphoto.com/id/1192141178/vector/little-children-playing-football-outdoor.jpg?s=612x612&w=0&k=20&c=nGXrl6k3rMsN8cEnIZ4kLzpMUYjwclbPdlIuA_dv-Io=",
    },
    {
      name: "PS Football",
      location: "Vadasithur",
      phone: "34567891",
      image:
        "https://img.freepik.com/free-vector/cartoon-football-players-training-collection_23-2149007091.jpg",
    },
    {
      name: "HS Football",
      location: "Kondampatti",
      phone: "34567891",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_hxvJNOP8nZI7cM0MpCrQAula4NMisDXNNQ&s",
    }
    ,
    {
      name: "JFC Football",
      location: "Vadasithur",
      phone: "34567891",
      image:
        "https://img.freepik.com/premium-photo/3d-young-boy-character-playing-football-isolated-white-background_964427-945.jpg",
    },
    {
      name: "HFC Football",
      location: "Kondampatti",
      phone: "34567891",
      image:
        "https://img.freepik.com/photos-premium/football-pixar-style-animation-creative-3d_950002-88650.jpg",
    }
  ];

  const filteredSports = sportsData.filter(sport =>
    sport.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div id="sidebar">
        <nav className="custom-nav">
          <ul>
            <li>
              <Link to="/home"> Home...🏠</Link>
            </li>
            <li>
              <Link to="/profile">Profile...👤</Link>
            </li>
            <li>
              <Link to="/booking-details">BookingDetails</Link>
            </li>
            <li>
              <Link to="/">Log-Out</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div id="main-content">
        <div id="header">
          <h1>Turf Hub</h1>
          <input
            type="text"
            placeholder="Search..."
            className="search-box"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="middle">
          {filteredSports.map((sport, index) => (
            <div className="card" key={index}>
              <img src={sport.image} alt={sport.name} />
              <h3>{sport.name}</h3>
              <p>Location: {sport.location}</p>
              <p>Phone No: {sport.phone}</p>
              <Link
                to={{
                  pathname: "/cricslot",
                  state: { name: sport.name, image: sport.image }
                }}
                style={{ textDecoration: 'none' }}
              >
                <button className="book-now-btn">Book Now</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
