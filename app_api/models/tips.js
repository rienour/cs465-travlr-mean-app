const fs = require('node:fs');
const tips = JSON.parse(fs.readFileSync('./data/tips.json', 'utf-8'));

/**
 * This model provides access to the data for tips related information
 */
class Tips {
  /**
   * This method will return the list of tips present from the data source
   *
   * @returns Array of tips
   */
  static findAll() {
    return tips;
  }
}

module.exports = {
  Tips,
};
