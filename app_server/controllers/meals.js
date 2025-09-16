const { Meals } = require('../models/meals');

/**
 * GET Meals page.
 *
 * @param req Express Request object
 * @param res Express Response object
 * @param next Express next function
 */
const mealsController = (req, res, next) => {
  res.render('meals', { title: 'Travlr Getaways', meals: Meals.findAll() });
}

module.exports = {
  mealsController,
};
