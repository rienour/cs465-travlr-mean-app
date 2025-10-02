const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  code: { type: String, required: true, index: true },
  name: { type: String, required: true, index: true },
  length: { type: String, required: true },
  start: { type: Date, required: true },
  resort: { type: String, required: true },
  perPerson: { type: String, required: true },
  image: { type: String, required: true },
  descriptions: { type: [String], required: true },
});

const Trip = mongoose.model("trips", tripSchema);

const mealSchema = new mongoose.Schema({
  code: { type: String, required: true, index: true },
  category: { type: String, required: true, index: true },
  image: { type: String, required: true },
  overview: { type: String, required: true },
});

const Meal = mongoose.model("meals", mealSchema);

module.exports = {
  Trip,
  Meal,
};
