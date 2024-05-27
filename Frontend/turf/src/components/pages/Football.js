import React from "react";
import {Link} from 'react-router-dom';
import './cf.css';
function football() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Foot Ball</title>
          <style dangerouslySetInnerHTML={{__html: "\n        body {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 0;\n            background-color: #f8f8f8;\n        }\n        #sidebar {\n            background-color: #333;\n            color: #fff;\n            width: 200px;\n            height: 100vh;\n            float: left;\n            padding-top: 20px;\n        }\n        #sidebar ul {\n            list-style-type: none;\n            padding: 0;\n        }\n        #sidebar li {\n            padding: 10px 20px;\n            border-bottom: 1px solid #555;\n        }\n        #sidebar li a {\n            color: #fff;\n            text-decoration: none;\n            font-size: 18px;\n        }\n        #sidebar li:hover {\n            background-color: #555;\n        }\n        #header {\n            background-color: #333;\n            color: #fff;\n            text-align: center;\n            padding: 20px 0;\n        }\n        #middle {\n            padding: 20px;\n            display: grid;\n            grid-template-columns: repeat(3, 1fr);\n            grid-template-rows: repeat(3, 300px);\n            gap: 20px;\n        }\n        .card {\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n            border-radius: 5px;\n            overflow: hidden;\n            position: relative; /* Needed for absolute positioning of description */\n            cursor: pointer; /* Add pointer cursor to indicate clickable */\n        }\n        .card img {\n            width: 100%;\n            height: auto;\n            transition: transform 0.3s;\n        }\n        .card:hover img {\n            transform: scale(1.1); /* Enlarge image on hover */\n        }\n        .description {\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            width: 100%;\n            background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */\n            color: #fff;\n            padding: 10px;\n            box-sizing: border-box; /* Include padding in width */\n            opacity: 0; /* Initially hidden */\n            transition: opacity 0.3s; /* Smooth transition */\n        }\n        .card:hover .description {\n            opacity: 1; /* Show description on hover */\n        }\n        .book-now-btn {\n            display: block;\n            width: 100%;\n            padding: 10px;\n            background-color: #4CAF50; /* Green */\n            color: white;\n            text-align: center;\n            text-decoration: none;\n            transition: background-color 0.3s;\n            border: none;\n            cursor: pointer;\n        }\n        .book-now-btn:hover {\n            background-color: #45a049; /* Darker green */\n        }\n    " }} />
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
            <h1>Foot Ball</h1>
          </div>
          <div id="middle">
            <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Hpzt51w7kXodIbJWhWymD9bGiMWxE2ftiAVz8Fh5B2UIoFK6Fpw3EksGnrzNKP75TDY&usqp=CAU" alt="Football" className="card-image" />
                        <h3>CFC Sports</h3>
          <p>Location: Kinatukidavu</p>
          <p>Phone No: 34567891</p>
           <Link to = "/footslot"  style={{ textDecoration: 'none' }}> <button className="book-now-btn">Book Now</button></Link>
            </div>
            <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGsKWVniK32Rh6RMd710BnhzfoaPT0wBzCmiA1Wt0KnDlzi82WXEwIKel46qPmkc-bzY&usqp=CAU" alt="Football" className="card-image" />
                        <h3>KFC Sports</h3>
          <p>Location: Vadasithur</p>
          <p>Phone No: 34567891</p>
           <Link to = "/footslot"  style={{ textDecoration: 'none' }}> <button className="book-now-btn">Book Now</button></Link>
            </div>
            <div className="card">
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_hxvJNOP8nZI7cM0MpCrQAula4NMisDXNNQ&s" ></img>
            <h3>CSK Sports</h3>
          <p>Location: Kondampatti</p>
          <p>Phone No: 34567891</p>
          <Link to = "/footslot"  style={{ textDecoration: 'none' }}> <button className="book-now-btn">Book Now</button></Link>
            </div>
            </div>  
          </div>
      );
    };

  export default football;