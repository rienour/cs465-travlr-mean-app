const { Logger } = require("../../logger/logger");
const Mongoose = require("./db.js");
const { Trip, Meal } = require("./travlr.js");
const fs = require("fs");

const trips = JSON.parse(
  fs.readFileSync(`${__dirname}/../../data/trips.json`, "utf8"),
);
const meals = JSON.parse(
  fs.readFileSync(`${__dirname}/../../data/meals.json`, "utf8"),
);

const seedDB = async () => {
  await Trip.deleteMany({});
  await Trip.insertMany(trips);
  await Meal.deleteMany({});
  await Meal.insertMany(meals);
};

seedDB()
  .then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
  })
  .catch((reason) => {
    Logger.error(`Unable to seed database: ${reason}`);
  });
