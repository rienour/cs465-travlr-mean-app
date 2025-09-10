const express = require('express');
const router = express.Router();
const { homeController } = require('../controllers/main')

/**
 * GET Index Page
 */
router.get('/', homeController);

module.exports = router;
