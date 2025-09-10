const express = require('express');
const router = express.Router();
const { travelController } = require('../controllers/travel')

/**
 * GET Index Page
 */
router.get('/', travelController);

module.exports = router;
