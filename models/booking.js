import { Schema, model } from "mongoose";

const bookingSchema = new mongoose.Schema({
  tripId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "tripModel",
    required: true,
  },
  busId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "busModel",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "userModel",
    required: [true, "User id is required"],
  },
  seatNumber: {
    type: [Number],
    required: [true, "Seat Number is required"],
  },
  price: {
    type: String,
    required: [true, "Booking Price is required"],
  },
  seats_booked: {
    type: Number,
    required: true,
  }, // Number of seats booked
  booking_time: {
    type: Date,
    required: true,
    default: Date.now,
  }, // Time of booking
  status: {
    type: String,
    required: true,
    default: "confirmed",
  }, // Status of the booking (e.g., confirmed, canceled)
});

const bookingModel = model("Booking" , bookingSchema)

export default bookingModel;