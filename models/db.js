const mysql = require("mysql2");
require("dotenv").config();
const db = mysql.createConnection({
    host: localhost
    user: "USERNAME",          
    password: "YOUR_PASSWORD",   
    database: "school_management" 
  });

db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
      return;
    }
    console.log('Connected to the database');
  });

module.exports = db;
