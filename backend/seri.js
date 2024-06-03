const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const empmodel = require('./emp');
const Booking = require('./bookingshem');

const app = express();
app.use(express.json())
app.use(cors())
const mongoURI = 'mongodb://localhost:27017/turf';



mongoose.connect(mongoURI, { })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});
 
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  empmodel.findOne({ username: username })
    .then(user => {
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      
      if (user.password === password) {
        console.log(username,password)
        res.status(200).json({ message: 'Login successful' });
      } else {
        
        res.status(401).json({ message: 'Invalid username or password' });
      }
    })
    .catch(err => {
      // Handle errors
      console.error('Error during login:', err);
      res.status(500).json({ message: 'Internal server error' });
    });
});

app.post('/users',(req,res)=>{
  empmodel.create(req.body)
  .then(mern => res.json(users))
  .catch(err => res.json(err))
})

app.get('/getusers', async (req, res) => {
  const { username } = req.query; // Access username from query parameters

  try {
    if (!username) {
      return res.status(400).json({ message: 'Username parameter is required.' });
    }

    const users = await empmodel.find({ username: username }); // Filter based on username

    if (users.length === 0) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});

const port = process.env.PORT || 2000;


const message = 'Hello from your Express.js server!';


app.get('/', (req, res) => {
  res.send(message);
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});



app.post('/api/bookings', async (req, res) => {
  const { username, teamName, selectedDate, selectedTime, name, image } = req.body;

  try {
    const newBooking = new Booking({
      username,
      teamName,
      date: selectedDate,
      time: selectedTime,
      name, // include the name field
      image, // include the image field
    });

    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Server error.' });
  }
});




app.get('/api/bookings', async (req, res) => {
  const { username } = req.query; // Access username from query parameters

  try {
    if (!username) {
      return res.status(400).json({ message: 'Username parameter is required.' });
    }

    const users = await Booking.find({ username: username }); // Filter based on username

    if (users.length === 0) {
      alert("no")
      return res.status(404).json({ message: 'User not found.' });
    }

    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});



