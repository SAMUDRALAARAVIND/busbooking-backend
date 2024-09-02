
const validateBookingData = async (data) => {
  return new Promise((resolve, reject) => {
    const { tripId, boardingPointId, droppingPointId, seatsInfo, pocDetails } =
      data;

    if (!tripId || !boardingPointId || !droppingPointId || !seatsInfo || !pocDetails) {
      return reject("Booking details Missing")
    }

    if (!Array.isArray(seatsInfo) || seatsInfo.length === 0) {
      return reject("Seats Information is required")
    }

    seatsInfo.forEach((seat) => {
      if (!seat.seatNumber || !seat.name || !seat.age || !seat.gender) {
        return reject("Invalid Seat Information")
      }

      if (!["M", "F", "O"].includes(seat.gender)) {
        return reject("Invalid gender value");
      }
    })

    if (!pocDetails.phoneNumber || !pocDetails.email) {
      return reject("Invalid point of Contact details");
    }

    resolve();
  });
};

module.exports = { validateBookingData }
