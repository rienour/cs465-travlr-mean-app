/**
 * GET Travelers page.
 *
 * @param req Express Request object
 * @param res Express Response object
 * @param next Express next function
 */
const travelController = (req, res, next) => {
  res.render('travel', { title: 'Travlr Getaways' });
}

module.exports = {
  travelController,
};
