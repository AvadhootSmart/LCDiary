const express = require("express");
const router = express.Router();

const listsController = require("../controllers/listsController");
const isAuthenticated = require("../middlewares/isAuthenticated");

// v1/list
router.get("/", isAuthenticated, listsController.getUserLists);
router.post("/create",isAuthenticated, listsController.createList);

module.exports = router;
