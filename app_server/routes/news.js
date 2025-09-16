const express = require('express');
const router = express.Router();
const { newsController } = require('../controllers/news')

/**
 * GET News Page
 */
router.get('/', newsController);

module.exports = router;
