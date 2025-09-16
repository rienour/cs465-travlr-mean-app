const express = require('express');
const router = express.Router();
const { aboutController } = require('../controllers/about')

/**
 * GET About Page
 */
router.get('/', aboutController);

module.exports = router;
