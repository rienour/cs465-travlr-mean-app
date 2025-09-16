/**
 * GET Contact Us page.
 *
 * @param req Express Request object
 * @param res Express Response object
 * @param next Express next function
 */
const contactController = (req, res, next) => {
  res.render('contact', { title: 'Travlr Getaways' });
}

module.exports = {
  contactController,
};
