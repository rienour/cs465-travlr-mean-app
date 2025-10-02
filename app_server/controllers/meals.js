const { meals } = require("../../app_api/endpoints");

/**
 * GET Meals page.
 *
 * @param req Express Request object
 * @param res Express Response object
 * @param next Express next function
 */
const mealsController = async (req, res, next) => {
  await fetch(meals.url, meals.options)
    .then((res) => res.json())
    .then((json) => {
      let message = null;
      if (!(json instanceof Array)) {
        message = "Meal Lookup error";
      } else if (json.length === 0) {
        message = "No meals found";
      }
      res.render("meals", { title: "Travlr Getaways", meals: json, message });
    })
    .catch((err) => {
      logger.error(err instanceof Error ? err.message : err);
      return res.status(500).send("Unable to process meals");
    });
};

module.exports = {
  mealsController,
};
