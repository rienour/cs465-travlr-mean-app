const { Logger } = require("../../logger/logger")
const { rooms } = require("../../app_api/endpoints")

/**
 * GET Rooms page.
 *
 * @param req Express Request object
 * @param res Express Response object
 * @param next Express next function
 */
const roomsController = async (req, res, next) => {
  await fetch(rooms.url, rooms.options)
    .then((res) => res.json())
    .then((json) => {
      let message = null;
      if (!(json instanceof Array)) {
        message = "Room Lookup error";
      } else if (json.length === 0) {
        message = "No rooms found";
      }
      res.render("rooms", { title: "Travlr Getaways", rooms: json, message });
    })
    .catch((err) => {
      Logger.error(err instanceof Error ? err.message : err);
      return res.status(500).send("Unable to process trips");
    });
};

module.exports = {
  roomsController,
};
