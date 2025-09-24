const { Logger } = require('../logger/logger');
const Mongoose = require('./db.js');
const Trip = require('./travlr.js');
const fs = require('fs');

const trips = JSON.parse(fs.readFileSync(`${__dirname}/../../data/trips.json`, 'utf8'));

const seedDB = async () => {
  await Trip.deleteMany({});
  await Trip.insertMany(trips);
}

seedDB()
  .then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
  })
  .catch((reason) => {
    Logger.error(`Unable to seed database: ${reason}`);
  });
