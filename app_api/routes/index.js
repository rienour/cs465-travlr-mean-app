const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");
const mealsController = require("../controllers/meals");
const newsController = require("../controllers/news");

router.route("/trips").get(tripsController.tripsList);
router.route("/trips/:code").get(tripsController.tripsByCode);
router.route("/meals").get(mealsController.mealsList);
router.route("/meals/:code").get(mealsController.mealsByCode);
router.route("/news").get(newsController.newsList);
router.route("/news/:code").get(newsController.newsByCode);

module.exports = router;
