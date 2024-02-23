# (STEP 3) Create Models

### 1. Create new folder Named ```models```:
Inside the folder create new file named ```Users.js```.

### 2. In ```.Users.js``` file:
Create your User Schema by adding this code :

```
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const UserSchema = new Schema({
  name: String,
  age: Number,
  email: String
});

// Create a model based on that schema
const UserModel = mongoose.model("user", UserSchema);

// export the model
module.exports = UserModel;
```

### 3. Update ```server.js``` file with :

```
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
```

### Starting the Server

To start the server, run the following command in your terminal:

```npm start```

This command will start the server using Nodemon, which will automatically restart the server whenever changes are detected in your files.
