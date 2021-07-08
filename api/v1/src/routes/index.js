/**
 * This is where you will define all the api endpoints
 * that the api will have.
 */

const router = require('express').Router();

// API Controllers.
const exampleController = require('../controllers/exampleController');

// Routes endpoints
router.get('/', exampleController.example);

module.exports = router;
