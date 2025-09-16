const fs = require('node:fs');
const rooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf-8' ));

/**
 * This model provides access to the data for rooms related information
 */
class Rooms {
  /**
   * This method will return the list of rooms present from the data source
   *
   * @returns Array of rooms
   */
  static findAll() {
    return rooms;
  }
}

module.exports = {
  Rooms,
};
