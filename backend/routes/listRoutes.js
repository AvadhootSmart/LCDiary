const express = require("express");
const router = express.Router();

const listsController = require("../controllers/listsController");
const isAuthenticated = require("../middlewares/isAuthenticated");

// v1/list
router.get("/", isAuthenticated, listsController.getUserLists);
router.get("/:id", isAuthenticated, listsController.getListById);
router.post("/create",isAuthenticated, listsController.createList);
router.post("/update/:id",isAuthenticated, listsController.updateList);

module.exports = router;
