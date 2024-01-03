const express = require("express");
const router = express.Router();
const {
  getPeople,
  getPersonByID,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/peopleController");

router.get("/", getPeople);
router.get("/:id", getPersonByID);
router.post("/", createPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

module.exports = router;
