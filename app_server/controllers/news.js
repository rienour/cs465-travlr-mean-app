const { News } = require('../models/news');
const { Tips } = require('../models/tips');


/**
 * GET News page.
 *
 * @param req Express Request object
 * @param res Express Response object
 * @param next Express next function
 */
const newsController = (req, res, next) => {
  const story = News.findById('experience_kayaking');
  const recents = News.findAll().filter(({ id }) => id !== 'experience_kayaking');
  const tips = Tips.findAll();

  res.render('news', { title: 'Travlr Getaways', story, recents, tips });
}

module.exports = {
  newsController,
};
