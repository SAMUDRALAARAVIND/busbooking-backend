const tripModel = require("../models/trip.js");
const cityModel = require("../models/city.js");
const busModel = require("../models/bus.js");
const getFormatedTripObj = require("../utils/getFormatedTripObj.js");
const catchAsyncError = require("../midlewares/catchAsyncError.js");

// create new trip => api/v1/trip
const createTrip = catchAsyncError(async (req, res, next) => {
  const newTrip = await tripModel.create(req.body);
  res.status(201).json({ success: true, trip: newTrip });
});

// get all  trip => api/v1/trip
const getAllTrip = catchAsyncError(async (req, res, next) => {
  const trips = await tripModel.find();
  res.status(200).json({ success: true, trip: trips, results: trips.length });
});

// get trip According to date => api/v1/trips
const getFilteredTrip = catchAsyncError(async (req, res, next) => {
  const { sourceCityId, destinationCityId, travelDate } = req.body;

  // get source and destination city;
  const sourceCity = await cityModel.findById(sourceCityId);
  const destinationCity = await cityModel.findById(destinationCityId);

  // generating statTime and endTime to get trips for a particular date;
  const dateString = new Date(travelDate).toISOString().split("T")[0];
  const startTime = travelDate;
  const endTime = new Date(dateString + "T23:59:59Z").getTime();

  // finding trips for a particular date;
  const trips = await tripModel.find({
    "route.startLocation": sourceCity.name,
    "route.endLocation": destinationCity.name,
    arrivalTime: {
      $gte: startTime,
      $lte: endTime,
    },
  });

  const boardingPoints = sourceCity.stopPoints;
  const dropingPoints = destinationCity.stopPoints;

  const formatedTrips = [];
  for (let trip of trips) {
    const newBus = await busModel.findById(trip.busId);
    const tripObj = getFormatedTripObj(trip, newBus, boardingPoints);
    formatedTrips.push(tripObj);
  }

  res.status(200).json({
    success: true,
    results: trips.length,
    boardingPoints,
    dropingPoints,
    trips: formatedTrips,
  });
});

module.exports = {
  createTrip,
  getAllTrip,
  getFilteredTrip,
};
