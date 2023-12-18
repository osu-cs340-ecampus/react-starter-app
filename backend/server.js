const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3002;

// If on FLIP, use cors() middleware to allow cross-origin requests from the frontend with your port number:
// app.use(cors({ credentials: true, origin: "http://flip3.engr.oregonstate.edu:3500" }));

//  Middleware
app.use(cors());
app.use(express.json());

app.use("/api/people", require("./routes/peopleRoutes"));

app.listen(PORT, () => {
  console.log(`Backend: app running on port ${PORT}...`);
});
