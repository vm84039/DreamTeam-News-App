require('dotenv').config(); // Load environment variables from .env file

const pgp = require('pg-promise')();

const db = pgp({
  connectionString: process.env.DATABASE_URL, // Use the environment variable
  max: 10,
  ssl: {
    rejectUnauthorized: false, // Set to true if using a valid CA-signed certificate
  },
});

module.exports = db;