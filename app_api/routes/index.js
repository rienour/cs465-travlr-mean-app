const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
function authenticateJWT(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (authHeader == null) {
    console.log("Auth Header Required but NOT PRESENT!");
    return res.sendStatus(401);
  }

  let headers = authHeader.split(" ");
  if (headers.length < 1) {
    console.log("Not enough tokens in Auth Header: " + headers.length);
    return res.sendStatus(501);
  }

  const token = authHeader.split(" ")[1];
  if (token == null) {
    console.log("Null Bearer Token");
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
    if (err) {
      return res.sendStatus(401).json("Token Validation Error!");
    }
    req.auth = verified;
  });
  next();
}

const tripsController = require("../controllers/trips");
const mealsController = require("../controllers/meals");
const newsController = require("../controllers/news");
const roomsController = require("../controllers/rooms");
const authController = require("../controllers/authentication");

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);
router
  .route("/trips")
  .get(tripsController.tripsList)
  .post(authenticateJWT, tripsController.addTrip);
router
  .route("/trips/:code")
  .get(tripsController.tripsByCode)
  .put(authenticateJWT, tripsController.tripsUpdateTrip);
router.route("/meals").get(mealsController.mealsList);
router.route("/meals/:code").get(mealsController.mealsByCode);
router.route("/news").get(newsController.newsList);
router.route("/news/:code").get(newsController.newsByCode);
router.route("/rooms").get(roomsController.roomsList);
router.route("/rooms/:code").get(roomsController.roomsByCode);

module.exports = router;
