const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware:

// If on FLIP, use cors() middleware to allow cross-origin requests from the frontend with your port number:
// http://localhost:5173 
// http://flip3.engr.oregonstate.edu:5173
app.use(cors({ credentials: true, origin: "*" }));
// app.use(cors());  // delete if app runs, probably not needed...
app.use(express.json());

// API Routes for backend:
app.use("/api/people", require("./routes/peopleRoutes"));

app.listen(PORT, () => {
  // Change this text to whatever FLIP server you're on
  console.log(`Server running:  http://flip3.engr.oregonstate.edu:${PORT}...`);
});
