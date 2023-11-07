const db = require('../db'); 
const bcrypt = require('bcryptjs');

const fs = require('fs');
const crypto = require('crypto');

// Generate a new secret key
const generatedSecretKey = crypto.randomBytes(32).toString('hex');

// Update the .env file with the new secret key
fs.writeFileSync('.env', `SECRET_KEY=${generatedSecretKey}`, 'utf-8');

// Load environment variables from .env file
require('dotenv').config();

// Access the secret key using process.env.SECRET_KEY
const secretKey = process.env.SECRET_KEY;

console.log('Generated and updated Secret Key:', secretKey);

const registerUser = async (userData) => {
    try {
      const { email, name, password, username } = userData;
      const enabled = true;
      const role = "DOM_USER";
  
      // Validate request data (add your validation logic here)
      if (!email || !name || !password || !username) {
        throw new Error('Missing required fields');
      }
  
      // Hash the password before saving to the database
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Insert user data into the database
      const newUser = await db.one(
        'INSERT INTO users (email, enabled, name, password, role, username) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [email, enabled, name, hashedPassword, role, username]
      );
  
      return newUser;
    } catch (error) {
      throw error;
    }
  };
  const loginUser = async (username, password) => {
    try {
      const user = await db.oneOrNone('SELECT * FROM users WHERE username = $1', username);
  
      if (!user || !bcrypt.compareSync(password, user.password)) {
        throw new Error('Incorrect username or password');
      }
  
      return user;
    } catch (error) {
      throw error;
    }
  };
  const getUserById = async (userId) => {
    try {
      const user = await db.oneOrNone('SELECT * FROM users WHERE id = $1', userId);
      return user;
    } catch (error) {
      throw error;
    }
  };


  module.exports = {
    registerUser,
    getUserById,
    loginUser,
  };