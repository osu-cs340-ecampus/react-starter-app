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

module.exports = pool;
