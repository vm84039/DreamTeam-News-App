const fs = require('fs');
const crypto = require('crypto');

// Generate a new secret key
const generatedSecretKey = crypto.randomBytes(32).toString('hex');

// Read the existing .env file
const envFilePath = '.env';
let existingEnvData = '';
try {
  existingEnvData = fs.readFileSync(envFilePath, 'utf-8');
} catch (err) {
  console.error('Error reading .env file:', err.message);
}

// Update the .env file with the new secret key
const updatedEnvData = existingEnvData.replace(/SECRET_KEY=.*/, `SECRET_KEY=${generatedSecretKey}`);

// Write the updated data back to the .env file
fs.writeFileSync(envFilePath, updatedEnvData, 'utf-8');

// Load environment variables from .env file
require('dotenv').config();

// Access the secret key using process.env.SECRET_KEY
const secretKey = process.env.SECRET_KEY;

console.log('Generated and updated Secret Key:', secretKey);

// Rest of your application setup and code
