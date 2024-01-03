const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware:

// If on FLIP, use cors() middleware to allow cross-origin requests from the frontend with your port number:
// http://localhost:5173 
// http://flip3.engr.oregonstate.edu:5173
app.use(cors({ credentials: true, origin: "*" }));
app.use(cors());
app.use(express.json());

// Routes:
app.use("/api/people", require("./routes/peopleRoutes"));

app.listen(PORT, () => {
  // Change to whatever FLIP server you're on
  console.log(`Server running:  http://flip3.engr.oregonstate.edu:${PORT}...`);
});
