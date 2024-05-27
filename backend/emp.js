const mongoose = require('mongoose')

const empshema = new mongoose.Schema({
    username : String,
    email : String,
    password : String
})

const empmodel = mongoose.model("users", empshema)
module.exports = empmodel