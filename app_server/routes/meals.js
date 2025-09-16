const express = require('express');
const router = express.Router();
const { mealsController } = require('../controllers/meals')

/**
 * GET Meals Page
 */
router.get('/', mealsController);

module.exports = router;
