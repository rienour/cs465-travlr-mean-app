const fs = require('node:fs');
const meals = JSON.parse(fs.readFileSync('./data/meals.json', 'utf-8'));

/**
 * This model provides access to the data for meals related information
 */
class Meals {
  /**
   * This method will return the list of meals present from the data source
   *
   * @returns Array of meals
   */
  static findAll() {
    return meals;
  }
}

module.exports = {
  Meals,
};
