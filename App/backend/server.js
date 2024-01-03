const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware:

// If on FLIP, use cors() middleware to allow cross-origin requests from the frontend with your port number:
app.use(cors({ credentials: true, origin: "http://flip2.engr.oregonstate.edu:3500" }));
app.use(cors());
app.use(express.json());

// Routes:
app.use("/api/people", require("./routes/peopleRoutes"));

app.listen(PORT, () => {
  // Change to whatever FLIP server you're on, copy and paste URL into browser to test:
  console.log(`Server running:  http://flip2.engr.oregonstate.edu:${PORT}...`);
});
