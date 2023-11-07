const pgp = require('pg-promise')();

const db = pgp({
  connectionString: process.env.DATABASE_URL,
  max: 10,
  ssl: {
    rejectUnauthorized: false, // Set to true if using a valid CA-signed certificate
  },
});

module.exports = db;
