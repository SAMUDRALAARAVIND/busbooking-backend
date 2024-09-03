const { bookingModel } = require("../models/booking");
const busModel = require("../models/bus");
const tripModel = require("../models/trip");

const bookTrip = async (bookingData, user) => {

    console.log(user)
    const { tripId, boardingPointId, droppingPointId, seatsInfo, pocDetails } = bookingData;

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

    try {

        validateBookingData({ tripId, boardingPointId, droppingPointId, seatsInfo, pocDetails });

        const trip = await tripModel.findById({ _id: tripId });

        if (!trip) {
            throw new Error("Trip not found");
        }

        const bus = await busModel.findById({ _id: trip.busId });

        const newBooking = new bookingModel({
            tripId,
            userId: user._id,
            bookingTime: Date.now(),
            seatsInfo,
            pocDetails,
            boardingPointId,
            droppingPointId,
        });

        await newBooking.save();
        return { message: "Booking successful", newBooking };
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

module.exports = { bookTrip }
