const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");
router.get("/", getPeople);
router.post("/", createPerson);
router.post("./api/postman/people", createPersonPostman);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

module.exports = router;
