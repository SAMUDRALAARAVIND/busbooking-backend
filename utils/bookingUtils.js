
const validateBookingData = (data) => {
  const { tripId, boardingPointId, droppingPointId, seatsInfo, pocDetails } = data;

  if (!tripId || !boardingPointId || !droppingPointId || !seatsInfo || !pocDetails) {
    throw new Error("Booking details missing");
  }

  if (!Array.isArray(seatsInfo) || seatsInfo.length === 0) {
    throw new Error("Seats information is required");
  }

  for (const seat of seatsInfo) {
    if (!seat.seatNumber || !seat.name || !seat.age || !seat.gender) {
      throw new Error("Invalid seat information");
    }

    if (!["M", "F", "O"].includes(seat.gender)) {
      throw new Error("Invalid gender value");
    }
  }

  if (!pocDetails.phoneNumber || !pocDetails.email) {
    throw new Error("Invalid point of contact details");
  }

  return true;
};

module.exports = { validateBookingData };