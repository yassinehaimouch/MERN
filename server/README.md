# (STEP 1) Setup Express Server

## Overview

This repository contains a simple setup for creating an Express server with MongoDB using Mongoose, along with Nodemon for automatic server restarts during development.

## Setup Instructions

### 1. Install Dependencies:
Navigate to the project directory and install the necessary dependencies using ```npm``` :
```npm init -y```

```npm install express mongoose nodemon```

### 2. Create server.js File :

Create a file named ```server.js``` in your project directory.

### 3. Write Server Setup Code :

In ```server.js```, add the following code to set up the Express server:

```
const express = require('express');
const app = express();
const port = 3002;

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
```

### 4. Update package.json:

Inside your ```package.json``` file, add the following scripts under the ```"scripts"``` section:

```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "nodemon server.js"
}
```

This allows you to start the server using ```npm start```.

### 5. Create .gitignore File:
Create a ```.gitignore``` file in your project directory to exclude certain files from version control. Add the following lines to ignore node_modules and .env files:

```
node_modules
.env
```

### Starting the Server

To start the server, run the following command in your terminal:

```npm start```

This command will start the server using Nodemon, which will automatically restart the server whenever changes are detected in your files.
