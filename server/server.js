// Create the server
const express = require("express");
const app = express();
const port = 3002;

// Import Mongoose
const mongoose = require("mongoose");

// Import dotenv to use MONGODB_PASSWORD
require('dotenv').config()

// Import UserModel
const UserModel = require('./models/Users');

// Add GET Method to server
app.get('/', async(req, res) => {
  
  // Get users from mongodb
  const users = await UserModel.find()
  // Send response from server to "/"
  res.json(users)
})

mongoose
  .connect(
    `mongodb+srv://yhaimouch:${process.env.MONGODB_PASSWORD}@cluster0.gjkv6k4.mongodb.net/mernproject?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
