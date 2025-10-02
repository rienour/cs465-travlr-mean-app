const { Logger } = require("../../logger/logger");
const Mongoose = require("./db.js");
const { Trip, Meal, New, Tip, Room } = require("./travlr.js");
const fs = require("fs");

const trips = JSON.parse(
  fs.readFileSync(`${__dirname}/../../data/trips.json`, "utf8"),
);
const meals = JSON.parse(
  fs.readFileSync(`${__dirname}/../../data/meals.json`, "utf8"),
);
const news = JSON.parse(
  fs.readFileSync(`${__dirname}/../../data/news.json`, "utf8"),
);
const tips = JSON.parse(
  fs.readFileSync(`${__dirname}/../../data/tips.json`, "utf8"),
);
const rooms = JSON.parse(
  fs.readFileSync(`${__dirname}/../../data/rooms.json`, "utf8"),
);

const seedDB = async () => {
  await Trip.deleteMany({});
  await Trip.insertMany(trips);
  await Meal.deleteMany({});
  await Meal.insertMany(meals);
  await New.deleteMany({});
  await New.insertMany(news);
  await Tip.deleteMany({});
  await Tip.insertMany(tips);
  await Room.deleteMany({});
  await Room.insertMany(rooms);
};

seedDB()
  .then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
  })
  .catch((reason) => {
    Logger.error(`Unable to seed database: ${reason}`);
  });
