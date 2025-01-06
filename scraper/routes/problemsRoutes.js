const express = require("express");
const router = express.Router();

const problemsController = require("../controllers/problemsController");

// v1/problem
router.post("/", problemsController.getProblemData);

module.exports = router;
