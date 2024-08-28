const { Schema, model } = require("mongoose");

const tripSchema = new Schema({
  busId: {
    type: Schema.Types.ObjectId,
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
        stopId: {
          type: Number,
          required: [true, "StopId is required"],
        },
        title: {
          type: String,
          required: [true, "Stop title is required"],
        },
        arrivalTime: {
          type: Number,
          required: [true, "Arrival Time is required"],
        },
        departureTime: {
          type: Number,
          required: [true, "Departure Time is required"],
        },
      },
    ],
  },
  arrivalTime: {
    type: Number,
    required: [true, "Arrival Time is required"],
  },
  departureTime: {
    type: Number,
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

tripSchema.index({
  "route.startLocation": 1,
  "route.endLocation": 1,
  arrivalTime: 1,
});

const tripModel = model("Trip", tripSchema);

module.exports = tripModel;
