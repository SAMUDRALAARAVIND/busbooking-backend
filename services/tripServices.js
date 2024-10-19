const tripModel = require("../models/trip.js");
const CustomError = require("./../utils/createCustomError.js");
const cityModel = require("../models/city.js");
const busModel = require("../models/bus.js");
const bookingModel = require("../models/bus.js");
const { Types } = require("mongoose");

const getAvailableSeats = (bus, bookings) => {
  const totalSeat = bus.layout?.upperDeck.length + bus.layout.lowerDeck.length;
  let availableSeats = totalSeat;
  if (bookings.length) {
    const bookedSeats = bookings.reduce((a, c) => a + c.seatsInfo.length, 0);
    availableSeats = totalSeat - bookedSeats;
  }
  return availableSeats;
};

const getTrips = async (query) => {
  let { sourceCityId, destinationCityId, travelDate } = query;

  const today12AM = new Date();
  today12AM.setHours(0, 0, 0, 0);
  const today1159PM = new Date();
  today1159PM.setHours(23, 59, 59, 999);

  let searchFilter = {};

  if (today12AM.getTime() / 1000 > Number(travelDate)) {
    throw new CustomError("Invalid Date", 400);
  }

  if (
    travelDate >= today12AM.getTime() / 1000 &&
    travelDate <= today1159PM.getTime() / 1000
  ) {
    searchFilter["startTime"] = {
      $gte: parseInt(Date.now() / 1000),
      $lte: parseInt(today1159PM.getTime() / 1000),
    };
  } else {
    const travelDate12AM = new Date(travelDate * 1000);
    travelDate12AM.setHours(0, 0, 0, 0);
    const travelDate1159PM = new Date(travelDate * 1000);
    travelDate1159PM.setHours(23, 59, 59, 999);
    searchFilter["startTime"] = {
      $gte: parseInt(travelDate12AM.getTime() / 1000),
      $lte: parseInt(travelDate1159PM.getTime() / 1000),
    };
  }

  searchFilter.source = new Types.ObjectId(sourceCityId);
  searchFilter.destination = new Types.ObjectId(destinationCityId);

  const sourceCity = await cityModel.findById(sourceCityId);
  const destinationCity = await cityModel.findById(destinationCityId);

  // checking if city is present in database
  if (!sourceCity || !destinationCity) {
    throw new CustomError("Requested City not Found", 404);
  }

  const tripFilterOjb = {
    _id: 1,
    startTime: 1,
    endTime: 1,
    prices: 1,
    boardingPoints: 1,
    droppingPoints: 1,
  };
  const trips = await tripModel
    .find(searchFilter, tripFilterOjb)
    .populate("busId", "_id busPartner amenities layout busType");

  const tripIds = trips.map((item) => ({ tripId: item._id }));
  let allBookigs = [];
  if (tripIds.length > 0) {
    allBookings = await bookingModel.find(
      { $or: tripIds },
      { seatsInfo: 1, tripId: 1 }
    );
  }
  const response = {};
  response.success = true;
  response.results = trips.length;

  response.boardingPoints = sourceCity?.stopPoints;
  response.dropingPoints = destinationCity?.stopPoints;
  response.trips = [];
  for (let trip of trips) {
    const bus = trip.busId;
    let minPrice = Number.MAX_SAFE_INTEGER,
      maxPrice = 0;
    trip.prices.forEach((seatPrice) => {
      if (minPrice > seatPrice.price) minPrice = seatPrice.price;
      if (maxPrice < seatPrice.price) maxPrice = seatPrice.price;
    });
    const bookings = allBookings.filter((item) => item.tripId === trip._id);
    response.trips.push({
      busId: bus._id,
      tripId: trip._id,
      // used while booking any seats for this trip.
      busPartner: bus.busPartner, //bus
      departureTime: trip.startTime,
      arrivalTime: trip.endTime, // epoch time
      amenities: bus.amenities, //bus
      availableSeats: getAvailableSeats(bus, bookings),
      busType: bus.busType,
      minPrice,
      maxPrice,
      boardingPoints: trip.boardingPoints,
      droppingPoints: trip.droppingPoints,
    });
  }

  return response;
};

module.exports = getTrips;
