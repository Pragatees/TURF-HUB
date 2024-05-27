const mongoose = require('mongoose');

// Define the booking schema with a TTL index on the createdAt field
const bookingSchema = new mongoose.Schema({
  username: { type: String, required: true },
  teamName: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  createdAt: { 
    type: Date, 
    default: Date.now, 
    index: { expires: '2h' } // TTL index to expire documents 2 hours after creation
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
