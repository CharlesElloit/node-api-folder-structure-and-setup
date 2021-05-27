const router = require("express").Router();

// API Controllers.
const userController = require("../controllers/userController");
const exampleController = require("../controllers/exampleController");

// Routes endpoints
router.get("/", exampleController.example);
router.get("/getUsers", userController.getUser);

module.exports = router;