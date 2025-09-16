const express = require('express');
const router = express.Router();
const { contactController } = require('../controllers/contact')

/**
 * GET Contact Page
 */
router.get('/', contactController);

module.exports = router;
