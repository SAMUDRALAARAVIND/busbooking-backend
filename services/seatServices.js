const tripModel = require("../models/trip.js");
const { bookingModel } = require("../models/booking.js");
const CustomError = require("../utils/createCustomError.js");

const getFormatSeatLayout = (seats, trip, bookings) => {
  return seats.map((s) => {
    const price = trip.prices.find((x) => x.seatNumber === s.seatNumber);
    let seatInfo;
    for (let item of bookings) {
      seatInfo = item.seatInfo.find((x) => x.seatNumber === s.seatNumber);
      if (seatInfo) break;
    }
    return {
      seatNumber: s.seatNumber,
      gender: seatInfo?.gender || null,
      row: s.row,
      column: s.column,
      price: price.price,
    };
  });
};

exports.getSeatLayout = async (query) => {
  const trip = await tripModel.findById(query.tripId).populate("busId");
  const bookings = await bookingModel.find({ tripId: query.tripId });

  if (!trip)
    throw new CustomError(`No Trip Found for the tripId ${query.tripId}`, 404);

  const upperDeck = trip.busId.layout?.upperDeck || [];
  const lowerDeck = trip.busId.layout?.lowerDeck || [];

  const response = { success: true };
  response.upperSeats = getFormatSeatLayout(upperDeck, trip, bookings);
  response.lowerSeats = getFormatSeatLayout(lowerDeck, trip, bookings);
  return response;
};
