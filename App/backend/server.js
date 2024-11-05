const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8500;

// Middleware:

// If on Classwork, use cors() middleware to allow cross-origin requests from the frontend with your port number:
// EX (local): http://localhost:5173 
// EX (classwork) http://classwork.engr.oregonstate.edu:5173
app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json());

// API Routes for backend CRUD:
app.use("/api/people", require("./routes/peopleRoutes"));


// Add your Connect DB Activitiy Code Below:
// ...


// ...
// End Connect DB Activity Code.


const os = require("os");
const hostname = os.hostname();

app.listen(PORT, () => {
  console.log(`Server running:  http://${hostname}:${PORT}...`);
});
