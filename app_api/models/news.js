const fs = require('node:fs');
const news = JSON.parse(fs.readFileSync('./data/news.json', 'utf-8'));

/**
 * This model provides access to the data for news related information
 */
class News {
  /**
   * This method will return a news story given the ID
   *
   * @param searchId string id to search for
   *
   * @returns News story if it exists, undefined otherwise
   */
  static findById(searchId) {
    return news.find(({ id }) => id === searchId);
  }

  /**
   * This method will return the list of news present from the data source
   *
   * @returns Array of news
   */
  static findAll() {
    return news;
  }
}

module.exports = {
  News,
};
