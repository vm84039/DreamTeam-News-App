const express = require('express');
const cors = require('cors'); 
const path = require('path')

const newsController = require('./controller/News'); 
const userController = require('./controller/User'); 

require('dotenv').config();
const { generatedSecretKey } = require('./service/authService');

process.env.SECRET_KEY = process.env.SECRET_KEY || generatedSecretKey;

const app = express();
const PORT = process.env.PORT || 3000;

const buildPath = path.join(__dirname, 'build')

app.use(cors());

app.use('/api/users/', userController); 
app.use('/api/news/', newsController);
app.use(express.static(buildPath))
app.use(express.json())




// gets the static files from the build folder
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})

  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
