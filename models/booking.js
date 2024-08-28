const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
  tripId: {
    type: Schema.Types.ObjectId,
    ref: "tripModel",
    required: true,
  },
  busId: {
    type: Schema.Types.ObjectId,
    ref: "busModel",
    required: true,
  },
  user: {
    type: Schema.ObjectId,
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

const bookingModel = model("Booking", bookingSchema);

module.exports = bookingModel;
