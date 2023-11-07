const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const db = require('../db'); 
const authService = require('../service/authService'); // Import the newsService module


const secretKey = 'your_secret_key'; 

router.get('/', async (req, res) => {
  try {
    const users = await db.any('SELECT * FROM users');
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/user/:id', async (req, res) => {

  
});

router.post('/user', express.json(), async (req, res) => {
  try {
    const userData = req.body;

    const newUser = await authService.registerUser(userData); // Use the registerUser function

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/login', express.json(), async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await authService.loginUser(username, password);

    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Generate JWT token
    const token = generateToken(user);

    res.status(200).json({ message: 'Login successful', user, token });
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Authentication failed' });
  }
});
// Function to generate JWT token
function generateToken(user) {
  const secretKey = process.env.SECRET_KEY; // Access secret key from environment variables
  const expiresIn = '1h'; // Token expiration time, e.g., 1 hour

  // Generate the token
  const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, { expiresIn });

  return token;
}

module.exports = router;
