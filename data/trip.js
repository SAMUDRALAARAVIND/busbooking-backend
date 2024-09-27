const mongoose = require("mongoose");

const trips = [
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 1, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-08-30T08:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 2, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-08-30T08:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 3, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-08-30T11:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 4, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-08-30T11:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    prices: [
      {
        seatNumber: "A1",
        price: 500,
      },
      {
        seatNumber: "A2",
        price: 500,
      },
    ],
    startTime: Math.floor(new Date("2024-08-30T07:00:00Z").getTime()), // Epoch time in milliseconds
    endTime: Math.floor(new Date("2024-08-30T12:00:00Z").getTime()), // Epoch time in milliseconds
    driverDetails: {
      contactNumber: "1234567890",
      name: "John Doe",
    },
  },
];

module.exports = trips;