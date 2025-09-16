const express = require('express');
const router = express.Router();
const { roomsController } = require('../controllers/rooms')

/**
 * GET Rooms Page
 */
router.get('/', roomsController);

module.exports = router;
