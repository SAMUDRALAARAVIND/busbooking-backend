const cityModel = require("../models/city");
const tripModel = require("../models/trip");

const tripController = async (req, res) => {
  try {
    const { sourceCityId, destinationCityId, travelDate } = req.body;

    const sourceCity = await cityModel.findById(sourceCityId);
    if (!sourceCity) {
      res.status(404).json({
        message: "Source City is not found",
      });
    }

    const destinationCity = await cityModel.findById(destinationCityId);
    if (!destinationCity) {
      res.status(404).json({
        message: "Destination City is not found",
      });
    }

    const trips = await tripModel.find({
      "route.startLocation": sourceCity.name,
      "route.endLocation": destinationCity.name,
      departureTime: { $gte: travelDate },
    });

    if (!trips) {
      return res.status(404).json({
        message: "No Trips found",
      });
    }

    const response = {
      boardingPoints: sourceCity.stopPoints,
      droppingPoints: destinationCity.stopPoints,
      trips: trips.map((trip) => ({
        busId: trip.busId,
        tripId: trip._id,
        busPartner: trip.driverName,
        departureTime: trip.departureTime,
        arrivalTime: trip.arrivalTime,
        amenities: trip.amenities,
        averageRating: trip.averageRating,
        numberOfRatings: trip.numberOfRatings,
        availableSeats: trip.availableSeats,
        busType: trip.busType,
        minPrice: trip.minPrice,
        maxPrice: trip.maxPrice,
        boardingPoints: trip.route.stops.map((stop) => stop.stopId),
        droppingPoints: trip.route.stops.map((stop) => stop.stopId),
      })),
    };

    res.status(200).json({
      message: "Trips are fetched successfully",
      trips: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};


module.exports = {
    tripController,
}