const express = require('express');
const router = express.Router();
const { usersController } = require('../controllers/user')

/**
 * GET users listing.
 */
router.get('/', usersController);

module.exports = router;
