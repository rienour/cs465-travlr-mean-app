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

const newSchema = new mongoose.Schema({
  id: { type: String, required: true, index: true },
  headline: { type: String, required: true, index: true },
  image: { type: String, required: false },
  date: { type: String, required: false },
  author: { type: String, required: false },
  paragraphs: { type: [String], required: false },
});

const New = mongoose.model("news", newSchema);

const tipSchema = new mongoose.Schema({
  id: { type: Number, required: true, index: true },
  title: { type: String, required: true, index: true },
});

const Tip = mongoose.model("tips", tipSchema);

module.exports = {
  Trip,
  Tip,
  Meal,
  New,
};
