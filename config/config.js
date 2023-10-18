const mysql = require("mysql2");
const dotenv = require("dotenv");
require("colors");

// Load env vars
dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "e_commerce",
};

const connectDB = mysql.createConnection(dbConfig);

connectDB.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message.red.bold);
    return;
  }
  console.log("Connected to the database".green.bold);
});

// Keep the connection open
module.exports = connectDB;
