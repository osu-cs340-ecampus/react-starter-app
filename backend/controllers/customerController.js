const lodash = require("lodash");
require("dotenv").config();
const db = require("../config/db");

// Endpoint to get all customers from the database
const getCustomers = async (req, res) => {
  try {
    // SQL query to select all rows from the "customers" table
    const query = "SELECT * FROM customers";
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // If no customers were found, throw an error
    if (rows.length === 0) {
      throw new Error("No customers found");
    }
    // Send the result as a JSON response
    res.json(rows);
  } catch (error) {
    console.error("Error fetching customers from the database:", error);
    res.status(500).json({ error: "Error fetching customers" });
  }
};

// Route to get a specific customer
const getCustomerById = async (req, res) => {
  try {
    const customerId = req.params.id;
    const query = "SELECT * FROM customers WHERE id = ?";
    const [result] = await db.query(query, [customerId]);

    if (result.length === 0) {
      // Customer not found
      return res.status(404).json({ error: "Customer not found" });
    }
    const customer = result[0];
    res.json(customer);
  } catch (error) {
    console.error("Error fetching customer from the database:", error);
    res.status(500).json({ error: "Error fetching customer" });
  }
};

const createCustomer = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const query = "INSERT INTO customers (name, email, phone) VALUES (?, ?, ?)";
    const result = await db.query(query, [name, email, phone]);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(500).json({ error: "Error creating customer" });
  }
};

const updateCustomer = async (req, res) => {
  // Get the customer ID
  const customerId = req.params.id;
  // Get the customer object
  const newCustomer = req.body;

  try {
    const [data] = await db.query("SELECT * FROM CUSTOMERS WHERE id = ?", [
      customerId,
    ]);

    const oldCustomer = data[0];

    if (!lodash.isEqual(oldCustomer, newCustomer)) {
      // Perform the SQL update
      const query = "UPDATE CUSTOMERS SET name=?, email=?, phone=? WHERE id=?";
      const values = [
        newCustomer.name,
        newCustomer.email,
        newCustomer.phone,
        customerId,
      ];
      await db.query(query, values);
      res.json({ message: "Customer updated successfully." });
    } else {
      res.json({ message: "Customer details are the same, no update" });
    }
  } catch (error) {
    console.log("Error updating customer", error);
    res
      .status(500)
      .json({ error: `Error updating the customer with id ${customerId}` });
  }
};

module.exports = updateCustomer;

// Endpoint to delete a customer from the database
const deleteCustomer = async (req, res) => {
  try {
    const customerId = req.params.id;
    const query = "DELETE FROM customers WHERE id = ?";
    const result = await db.query(query, [customerId]);
    res.json(result);
  } catch (error) {
    console.error("Error deleting customer from the database:", error);
    res.status(500).json({ error: "Error deleting customer" });
  }
};

// Export the functions as methods of an object
module.exports = {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
