const { bookingModel } = require("../models/booking");
const busModel = require("../models/bus");
const tripModel = require("../models/trip");
const { validateBookingData } = require("../utils/bookingUtils");


const bookTrip = async (bookingData, user) => {
    
    const { tripId, boardingPointId, droppingPointId, seatsInfo, pocDetails } = bookingData;
    
    try {
        
        await validateBookingData({ tripId, boardingPointId, droppingPointId, seatsInfo, pocDetails });

        const trip = await tripModel.findOne({ _id: tripId });
        
        if (!trip) {
            throw new Error("Trip not found");
        }

        const bus = await busModel.findOne({ _id: trip.busId });
        if (!bus) {
            throw new Error("Bus not found");
        }

        const seatPrices = seatsInfo.map((seat) => {
            let totalPrice;
            const priceInfo = trip.prices.map((p) => p.seatNumber === seat.seatNumber)
            if (!priceInfo) {
                throw new Error(`Price not found for seat ${seat.seatNumber}`);
            }
            return { ...seat, price: totalPrice += priceInfo.price };
        });

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
        throw new Error(error.message);
    }
}

module.exports = { bookTrip } 
//tripId: mongoose.Types.ObjectId(tripId),