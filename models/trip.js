const { Schema, model } = require("mongoose");

const StopPoint = {
  stopId: { type: Number, required: true },
  arrivalTime: { type: Number, required: true },
  directions: { type: String, required: true },
  title: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true }
};

const tripSchema = new Schema({
  source: {
    ref: "City",
    type: Schema.Types.ObjectId,
  },
  busId: {
    ref: "Bus",
    type: Schema.Types.ObjectId,
  },
  destination: {
    ref: "City",
    type: Schema.Types.ObjectId,
  },
  boardingPoints: [StopPoint],
  droppingPoints: [StopPoint],
  prices: [
    {
      seatNumber: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  startTime: { type: Number, required: true },
  endTime: { type: Number, required: true },
  driverDetails: {
    contactNumber: { type: String, required: true },
    name: { type: String, required: true },
  },
});

const tripModel = model("Trip", tripSchema);

module.exports = tripModel;
