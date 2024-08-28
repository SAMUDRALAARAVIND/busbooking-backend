const busModel = require("../models/bus.js");
const catchAsyncError = require("../midlewares/catchAsyncError.js");

// create new Bus => api/v1/bus --post
const createBus = catchAsyncError(async (req, res, next) => {
  const bus = await busModel.create(req.body);
  res.status(201).json({ success: true, bus: bus });
});

// get all Bus => api/v1/bus  --get
const getAllBus = catchAsyncError(async (req, res, next) => {
  const buses = await busModel.find();
  res.status(200).json({ success: true, results: buses.length, buses: buses });
});

module.exports = {
  createBus,
  getAllBus,
};
