require("dotenv").config();
const mysql = require("mysql2");

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  database: process.env.DB_DATABASE || "undefined",
};

const pool = mysql
  .createPool({
    ...dbConfig,
    connectionLimit: 10,
    waitForConnections: true,
  })
  .promise();

const testServerConnection = async () => {
  const response = await pool.query("SELECT 1 + 1 AS solution");
  if (response) {
    console.log("Connected to the database!");
    console.log("Anwser:", response[0][0].solution);
  } else {
    console.log("Error connecting to the database!");
  }
};

testServerConnection();

module.exports = pool;
