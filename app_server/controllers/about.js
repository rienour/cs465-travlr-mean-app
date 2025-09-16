/**
 * GET About page.
 *
 * @param req Express Request object
 * @param res Express Response object
 * @param next Express next function
 */
const aboutController = (req, res, next) => {
  res.render('about', { title: 'Travlr Getaways' });
}

module.exports = {
  aboutController,
};
