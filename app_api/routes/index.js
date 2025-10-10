const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");
const mealsController = require("../controllers/meals");
const newsController = require("../controllers/news");
const roomsController = require("../controllers/rooms");

router
  .route("/trips")
  .get(tripsController.tripsList)
  .post(tripsController.addTrip);
router
  .route("/trips/:code")
  .get(tripsController.tripsByCode)
  .put(tripsController.tripsUpdateTrip);
router.route("/meals").get(mealsController.mealsList);
router.route("/meals/:code").get(mealsController.mealsByCode);
router.route("/news").get(newsController.newsList);
router.route("/news/:code").get(newsController.newsByCode);
router.route("/rooms").get(roomsController.roomsList);
router.route("/rooms/:code").get(roomsController.roomsByCode);

module.exports = router;
