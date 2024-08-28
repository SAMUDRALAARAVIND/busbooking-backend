const { Schema, model } = require("mongoose");

const busTypes = {
  AC: "AC",
  SLEEPER: "SLEEPER",
  SEATER: "SEATER",
  NON_AC: "NON_AC",
};

const amenities = [
  "WIFI",
  "LIVE_TRACKING",
  "CHARGING_PORT",
  "EMERGENCY_EXIT",
  "WATER",
];

const SeatTypes = ["SEATER", "SLEEPER"];

const Seat = {
  seatNumber: { type: String, required: true },
  row: { type: Number, required: true },
  column: { type: Number, required: true },
  type: { type: String, enum: SeatTypes, required: true },
};

// Bus Schema
const busSchema = new Schema({
  busPartner: {
    type: String,
    required: [true, "Bus name is required"],
  },
  busType: {
    type: String,
    enum: [busTypes.AC, busTypes.SLEEPER, busTypes.SEATER, busTypes.NON_AC],
    required: [true, "Bus Type is required"],
  },
  amenities: {
    type: [String],
    enum: amenities,
    default: "",
  },
  busNumber: {
    type: String,
    required: [true, "License no. is required"],
  },
  layout: {
    upperDeck: { type: [Seat] },
    lowerDeck: { type: [Seat], required: true },
  },
});

const busModel = model("Bus", busSchema);

module.exports = busModel;
