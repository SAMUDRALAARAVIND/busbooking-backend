const cityModel = require("../models/city.js");
const catchAsyncError = require("../midlewares/catchAsyncError.js");

// create new city => api/v1/city --post
const createCity = catchAsyncError(async (req, res, next) => {
  const newCity = await cityModel.create(req.body);
  res.status(201).json({ success: true, city: newCity });
});

// get all  city => api/v1/city   --get
const getAllCity = catchAsyncError(async (req, res, next) => {
  const cities = await cityModel.find();
  res.status(200).json({ success: true, results: cities.length, city: cities });
});

module.exports = {
  createCity,
  getAllCity,
};
