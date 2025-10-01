const fs = require('node:fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf-8' ));

/**
 * This model provides access to the data for trips related information
 */
class Trips {
  /**
   * This method will return the list of trips present from the data source
   *
   * @returns Array of trips
   */
  static findAll() {
    return trips;
  }
}

module.exports = {
  Trips,
};
