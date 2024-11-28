const mysql = require("mysql2");
require("dotenv").config();
const db = mysql.createConnection({
    host: "127.0.0.1",      // MySQL server address
    user: "root",           // MySQL username (should be a string)
    password: "jeevansh",   // MySQL password (should be a string)
    database: "school_management" // Database name
  });

db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
      return;
    }
    console.log('Connected to the database');
  });

module.exports = db;
