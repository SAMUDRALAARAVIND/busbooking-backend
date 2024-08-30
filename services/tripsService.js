const tripModel = require("./../models/trip");

const getTripsList = async (source, destination, startTime) => {

    const trips = await tripModel.find({source,destination,startTime})
        .populate("busId")
        .populate("source")
        .populate("destination")


    const response = trips?.map((trip) => {
        const priceArr = trip.prices.map(p => p.price);
        return {
            boardingPoints: trip.source.stopPoints,
            droppingPoints: trip.destination.stopPoints,
            trips: {
                tripId: trip._id,
                busId: trip.busId._id,
                busPartner: trip.busId.busPartner,
                departureTime: trip.startTime,
                arrivalTime: trip.endTime,
                amenities: trip.busId.amenities,
                averageRating: 4,
                numberOfRatings: 6543,
                availableSeats: 76543,
                availableSeats: trip.prices.length,
                busType: trip.busId.busType,
                minPrice: Math.min(...priceArr),
                maxPrice: Math.max(...priceArr),
                boardingPoints: trip.boardingPoints,
                droppingPoints: trip.droppingPoints
            },
        }
    });
    
    return response;
}

module.exports = getTripsList