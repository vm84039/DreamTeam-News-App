const express = require('express');
const cors = require('cors'); 
const newsController = require('./controller/News'); 
const userController = require('./controller/User'); 

require('dotenv').config();
const { generatedSecretKey } = require('./service/authService');

process.env.SECRET_KEY = process.env.SECRET_KEY || generatedSecretKey;

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());

app.use('/api/users/', userController); 
app.use('/api/news/', newsController);




  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
