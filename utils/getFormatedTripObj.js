const getFormatedTripObj = (trip, newBus, cityBoardingPoints) => {
  // calculating total Seats
  // to calculate available seat we need to find booked seats and subtract it from total
  // i am using total seats as available seats as i do not have booking data;
  const totalSeats =
    newBus.layout.upperDeck.length + newBus.layout.lowerDeck.length;

  let boardingPoints = [];
  let dropingPoints = [];

  // making stopIdarr from trip stops Point
  const stopIdArr = trip.route.stops.map((stop) => stop.stopId);

  // creating boardingPoints and dropingPoints
  stopIdArr.forEach((stopId) => {
    if (cityBoardingPoints.some((p) => p.stopId === stopId))
      boardingPoints.push(stopId);
    else dropingPoints.push(stopId);
  });

  return {
    tripId: trip._id,
    busId: trip.busId,
    busPartner: newBus.busPartner,
    arrivalTime: trip.arrivalTime,
    departurTime: trip.departureTime,
    amenities: newBus.amenities,
    availableSeats: totalSeats,
    busType: newBus.busType,
    minPrice: 800,
    maxPrice: 3000,
    boardingPoints,
    dropingPoints,
  };
};

module.exports = getFormatedTripObj;
