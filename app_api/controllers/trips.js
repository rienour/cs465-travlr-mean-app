const mongoose = require("mongoose")
const Trip = require("../models/travlr")
const Model = mongoose.model('trips')

/**
  * GET: /trips - lists all the trips
  */
const tripsList = async (req, res) => {
  const result = await Model.find({}).exec();

  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(404).err(err);
  }
}

/**
  * GET: /trips/:code - lists all the trips
  */
const tripsByCode = async (req, res) => {
  const result = await Model.find({ code: req.params.code }).exec();

  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(404).err(err);
  }
}
module.exports = {
  tripsList,
  tripsByCode,
}
