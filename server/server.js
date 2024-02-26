// Create the server
const express = require("express");
const app = express();
// Import CORS
const cors = require('cors')
app.use(cors())
app.use(express.json())
const port = 3002;
// Import schema
const Username = require('./models/Users')

// Import Mongoose
const mongoose = require("mongoose");

// Import dotenv to use MONGODB_PASSWORD
require('dotenv').config()

// Import UserModel
const UserModel = require('./models/Users');
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send("Hello World!")
})


// Add GET Method to server
app.get('/users', async(req, res) => {
  // Get users from mongodb
  const users = await UserModel.find()
  // Send response from server to "/"
  res.json(users)
})

app.post('/createuser', (req, res) => {
  const newUser = new Username(req.body);
  newUser
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
})

// Route for Delete a book
app.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Username.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).send({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.put('/:id', async (req, res) => {
  const user = await Username.findById(req.params.id);
  user.name = req.body.name;
  user.age = req.body.age;
  user.email = req.body.email;
  user.save();
  res.json(user);
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
