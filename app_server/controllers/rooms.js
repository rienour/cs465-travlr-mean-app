const { Rooms } = require('../models/rooms');

/**
 * GET Rooms page.
 *
 * @param req Express Request object
 * @param res Express Response object
 * @param next Express next function
 */
const roomsController = (req, res, next) => {
  res.render('rooms', { title: 'Travlr Getaways', rooms: Rooms.findAll() });
}

module.exports = {
  roomsController,
};
