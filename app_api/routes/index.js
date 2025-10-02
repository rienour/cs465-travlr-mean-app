const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");
const mealsController = require("../controllers/meals");

router.route("/trips").get(tripsController.tripsList);
router.route("/trips/:code").get(tripsController.tripsByCode);
router.route("/meals").get(mealsController.mealsList);
router.route("/meals/:code").get(mealsController.mealsByCode);

module.exports = router;
