import { Schema, model } from "mongoose";

const tripSchema = Schema({
  source: {
    ref: "City",
    type: mongoose.Schema.type.ObjectId,
  },
  busId: {
    ref: "Bus",
    type: mongoose.Schema.type.ObjectId,
  },
  destination: {
    ref: "City",
    type: mongoose.Schema.type.ObjectId,
  },
  boardingPoints: [
    {
      stopId: { type: Number, required: true },
      arrivalTime: { type: Number, required: true }, //use epoc times
    },
  ],
  droppingPoints: [
    {
      stopId: { type: Number, required: true },
      arrivalTime: { type: Number, required: true }, //use epoc times
    },
  ],
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

export default tripModel;
