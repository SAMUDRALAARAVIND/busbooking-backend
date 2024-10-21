const { Schema, model } = require("mongoose");

const genders = ["M", "F", "O"];

const bookingSchema = new Schema({
  tripId: {
    ref: "Trip",
    type: Schema.Types.ObjectId,
  },
  userId: {
    ref: "User",
    type: Schema.Types.ObjectId,
  },
  bookingTime: {
    type: Number,
    required: true,
  },
  seatsInfo: {
    type: [
      {
        paidAmount: Number,
        seatNumber: String,
        name: String,
        gender: {
          type: String,
          enum: genders,
        },
        age: Number,
      },
    ],
  },
  pocDetails: {
    phoneNumber: String,
    email: String,
  },
  boardingPointId: Schema.Types.ObjectId,
  droppingPointId: Schema.Types.ObjectId,
});

const bookingModel = model("Booking", bookingSchema);

module.exports = { bookingModel, genders };
