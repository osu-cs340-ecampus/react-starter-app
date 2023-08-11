const lodash = require("lodash");
require("dotenv").config();
const db = require("../config/db");

// Endpoint to get all customers from the database
const getPeople = async (req, res) => {
  try {
    // SQL query to select all rows from the "customers" table
    const query = "SELECT * FROM bsg_people";
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // If no customers were found, throw an error
    if (rows.length === 0) {
      throw new Error("No people found");
    }
    // Send the result as a JSON response
    res.json(rows);
  } catch (error) {
    console.error("Error fetching people from the database:", error);
    res.status(500).json({ error: "Error fetching people" });
  }
};

// Route to get a specific customer
const getPersonByID = async (req, res) => {
  try {
    const personID = req.params.id;
    const query = "SELECT * FROM bsg_people WHERE id = ?";
    const [result] = await db.query(query, [personID]);
    // Check if person was found
    if (result.length === 0) {
      return res.status(404).json({ error: "Person not found" });
    }
    const person = result[0];
    res.json(person);
  } catch (error) {
    console.error("Error fetching person from the database:", error);
    res.status(500).json({ error: "Error fetching person" });
  }
};

const createPerson = async (req, res) => {
  try {
    const { fname, lname, homeworld, age } = req.body;
    const query =
      "INSERT INTO bsg_people (fname, lname, homeworld, age) VALUES (?, ?, ?, ?)";
    const response = await db.query(query, [fname, lname, homeworld, age]);
    res.status(201).json(response);
  } catch (error) {
    console.error("Error creating person:", error);
    res.status(500).json({ error: "Error creating person" });
  }
};

const updatePerson = async (req, res) => {
  // Get the person ID
  const personID = req.params.id;
  // Get the person object
  const newPerson = req.body;

  try {
    const [data] = await db.query("SELECT * FROM bsg_people WHERE id = ?", [
      personID,
    ]);

    const oldPerson = data[0];

    // If people objects are not deep equal, update the person
    if (!lodash.isEqual(newPerson, oldPerson)) {
      const query =
        "UPDATE bsg_people SET fname=?, lname=?, homeworld=?, age=? WHERE id=?";
      const values = [
        newPerson.fname,
        newPerson.lname,
        newPerson.homeworld,
        newPerson.age,
        personID,
      ];
      await db.query(query, values);
      res.json({ message: "Person updated successfully." });
    } else {
      res.json({ message: "Person details are the same, no update" });
    }
  } catch (error) {
    console.log("Error updating person", error);
    res
      .status(500)
      .json({ error: `Error updating the person with id ${personID}` });
  }
};

// Endpoint to delete a customer from the database
const deletePerson = async (req, res) => {
  console.log("Deleting person with id:", req.params.id);
  try {
    const personID = req.params.id;
    const query = "DELETE FROM bsg_people WHERE id = ?";
    const result = await db.query(query, [personID]);
    res.json(result);
  } catch (error) {
    console.error("Error deleting person from the database:", error);
    res.status(500).json({ error: "Error deleting person" });
  }
};

// Export the functions as methods of an object
module.exports = {
  getPeople,
  getPersonByID,
  createPerson,
  updatePerson,
  deletePerson,
};
