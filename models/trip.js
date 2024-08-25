import { Schema, model } from "mongoose";

const tripSchema = new mongoose.Schema({
  busId: {
    type: mongoose.Schema.ObjectId,
    ref: "busModel",
    required: [true, "BusId is required"],
  },
  route: {
    startLocation: {
      type: String,
      required: [true, "Start Location is required"],
    },
    endLocation: {
      type: String,
      required: [true, "End Location is required"],
    },
    stops: [
      {
        title: {
          type: String,
          required: [true, "Stop title is required"],
        },
        arrivalTime: {
          type: String,
          required: [true, "Arrival Time is required"],
        },
        departureTime: {
          type: String,
          required: [true, "Departure Time is required"],
        },
      },
    ],
  },
  arrivalTime: {
    type: String,
    required: [true, "Arrival Time is required"],
  },
  departureTime: {
    type: String,
    required: [true, "Departure Time is required"],
  },
  driverName: {
    type: String,
    required: [true, "Driver name is required"],
  },
  status: {
    type: String,
    required: [true, "Status is required"], // Status of the trip (scheduled, in-progress, completed, canceled)
  },
});

const tripModel = model("Trip", tripSchema);

export default tripModel;
