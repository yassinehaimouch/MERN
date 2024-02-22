# (STEP 2) Connect MongoDB

### 1. Get MongoDB Link And Password from your MongoDB account:
Example :

```mongodb+srv://yhaimouch:<password>@cluster0.faubwhg.mongodb.net/mernproject?retryWrites=true&w=majority```

### 2. Create ```.env`` file:

Inside the file add your mongoDB password to don't push it in github.
```MONGODB_PASSWORD=your_password_should_be_here```

### 3. Update your code like this :

```
const express = require("express");
const app = express();
const port = 3002;
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://yhaimouch:${process.env.MONGODB_PASSWORD}@cluster0.faubwhg.mongodb.net/all-data?retryWrites=true&w=majority`
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
