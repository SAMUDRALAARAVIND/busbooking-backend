const tripModel = require("../models/trip.js");
const cityModel = require("../models/city.js");
const busModel = require("../models/bus.js");

const getTrips = async (query, res) => {
  let { sourceCityId, destinationCityId, travelDate } = query;

  const searchDateString = new Date(travelDate).toISOString().split("T")[0];
  const todayDateString = new Date().toISOString().split("T")[0];
  const todayEpochTime = new Date(todayDateString + "T00:00:00Z").getTime();

  let startTime = travelDate;
  let endTime = new Date(searchDateString + "T23:59:59Z").getTime();

  //checking if the search Date and today Date is same
  if (searchDateString === todayDateString) startTime = Date.now();

  //checking if the search date is less than today date
  if (startTime < todayEpochTime) {
    res.status(400);
    throw new Error("Please Provide a valid Date");
  }

  const sourceCity = await cityModel.findById(sourceCityId);
  const destinationCity = await cityModel.findById(destinationCityId);

  // checking if city is present in database
  if (!sourceCity || !destinationCity) {
    res.status(404);
    throw new Error("Requested City not Found");
  }

  const trips = await tripModel
    .find({
      source: sourceCityId,
      destination: destinationCityId,
      startTime: {
        $gte: startTime,
        $lte: endTime,
      },
    })
    .populate("busId");

  const boardingPoints = sourceCity?.stopPoints;
  const dropingPoints = destinationCity?.stopPoints;

  const formatedTrips = trips.map((trip) => {
    const totalSeats =
      trip.busId?.layout?.upperDeck?.length +
      trip.busId?.layout?.lowerDeck?.length;
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxPrice = 0;
    for (let p of trip.prices) {
      if (Number(p.price) < minPrice) minPrice = p.price;
      if (Number(p.price) > maxPrice) maxPrice = p.price;
    }

    return {
      busId: trip.busId._id,
      tripId: trip._id,
      busPartner: trip.busId.busPartner,
      departureTime: trip.endTime,
      arrivalTime: trip.startTime,
      amenities: trip.busId.amenities,
      averageRating: 3.5,
      numberOfRatings: 3500,
      availableSeats: totalSeats,
      busType: trip.busId.busType,
      minPrice,
      maxPrice,
      boardingPoints: trip.boardingPoints,
      droppingPoints: trip.droppingPoints,
    };
  });

  return {
    success: true,
    results: formatedTrips.length,
    boardingPoints,
    dropingPoints,
    trips: formatedTrips,
  };
};

module.exports = getTrips;
