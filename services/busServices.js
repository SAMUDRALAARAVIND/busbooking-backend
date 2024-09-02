const tripModel = require("../models/trip.js");

exports.getSeatLayout = async (query) => {
  const trip = await tripModel.findById(query.tripId).populate("busId");

  if (!trip) return null;

  const upperSeats = trip.busId?.layout?.upperDeck?.map((s) => {
    const price = trip.prices.find((x) => x.seatNumber === s.seatNumber);
    return {
      seatNumber: s.seatNumber,
      gender: null,
      row: s.row,
      column: s.column,
      price: price.price,
    };
  });

  const lowerSeats = trip.busId?.layout?.lowerDeck?.map((s) => {
    const price = trip.prices.find((x) => x.seatNumber === s.seatNumber);
    return {
      seatNumber: s.seatNumber,
      gender: null,
      row: s.row,
      column: s.column,
      price: price.price,
    };
  });

  return {
    upperDeck: {
      seats: upperSeats,
    },
    lowerDeck: {
      seats: lowerSeats,
    },
  };
};
