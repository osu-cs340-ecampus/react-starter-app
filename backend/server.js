const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3002;

// If on FLUP, use this cors() middleware instead with your information
// app.use(cors({ credentials: true, origin: "http://flip3.engr.oregonstate.edu:3500" }));
app.use(cors());
app.use(express.json());

app.use("/api/customers", require("./routes/customerRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
