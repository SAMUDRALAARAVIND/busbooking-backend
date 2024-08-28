import { Schema, model } from "mongoose";

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
    // TODO: add validations for both phoneNumber & email
    phoneNumber: String,
    email: String,
  },
  boardingPointId: Number,
  droppingPointId: Number,
});

const bookingModel = model("Booking", bookingSchema);

module.exports = { bookingModel, genders };
