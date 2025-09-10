/**
 * GET home page.
 *
 * @param req Express Request object
 * @param res Express Response object
 * @param next Express next function
 */
const homeController = (req, res, next) => {
  res.render('index', { title: 'Express' });
}

module.exports = {
  homeController,
};
