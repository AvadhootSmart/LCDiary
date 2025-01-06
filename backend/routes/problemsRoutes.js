const express = require("express");
const router = express.Router();

const problemsController = require("../controllers/problemsController");

// v1/problem
router.post("/", problemsController.getProblemData);
// temporary for single problem??
// router.post("/add", problemsController.addProblemsToDB);
//TODO: create user model from clerk and have problems belong to that user and pass ref for problems to user

module.exports = router;
