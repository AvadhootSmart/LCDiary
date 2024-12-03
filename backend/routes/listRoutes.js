const express = require("express");
const router = express.Router();

const listsController = require("../controllers/listsController");

// v1/list
router.get("/", listsController.getUserLists);
router.post("/create", listsController.createList);

module.exports = router;
