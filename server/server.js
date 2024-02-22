const express = require("express");
const app = express();
const port = 3002;
const mongoose = require("mongoose");
require('dotenv').config()

mongoose
  .connect(
    `mongodb+srv://yhaimouch:${process.env.MONGODB_PASSWORD}@cluster0.gjkv6k4.mongodb.net/mydata?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
