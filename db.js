/** Database for lunchly */

const { Client } = require("pg");

let DB_URI;
if (process.env.NODE_ENV === "test") {
    DB_URI = "lunchly_test"
} else {
    DB_URI = "lunchly"
}

const db = new Client({
    user: 'postgres',
    host: 'localhost',
    password: 'postgres',
    database: 'lunchly',
    port: 5432, 
});

db.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Error connecting to PostgreSQL database', err));

module.exports = db;
