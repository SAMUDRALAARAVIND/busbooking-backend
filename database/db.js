const mongoose = require("mongoose");
const busModel = require("../models/bus");

const connectDb = async () => {
    try {
        console.log("Mongoose Connect Successfully");
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.log(error);
    }
};

const buses = [
    {
      busPartner: "Express Travels",
      busType: "AC",
      amenities: "WIFI, LIVE_TRACKING, CHARGING_PORT",
      busNumber: "EX1234",
      layout: {
        upperDeck: [
          { seatNumber: "U1", row: 1, column: 1, type: "SEATER" },
          { seatNumber: "U2", row: 1, column: 2, type: "SEATER" },
          { seatNumber: "U3", row: 2, column: 1, type: "SEATER" },
          { seatNumber: "U4", row: 2, column: 2, type: "SEATER" },
        ],
        lowerDeck: [
          { seatNumber: "L1", row: 1, column: 1, type: "SEATER" },
          { seatNumber: "L2", row: 1, column: 2, type: "SEATER" },
          { seatNumber: "L3", row: 2, column: 1, type: "SLEEPER" },
          { seatNumber: "L4", row: 2, column: 2, type: "SLEEPER" },
        ],
      },
    },
    {
      busPartner: "Super Travels",
      busType: "AC",
      amenities: "WIFI, CHARGING_PORT, LIVE_TRACKING",
      busNumber: "ST5678",
      layout: {
        upperDeck: [
          { seatNumber: "U1", row: 1, column: 1, type: "SEATER" },
          { seatNumber: "U2", row: 1, column: 2, type: "SEATER" },
          { seatNumber: "U3", row: 2, column: 1, type: "SEATER" },
          { seatNumber: "U4", row: 2, column: 2, type: "SEATER" },
        ],
        lowerDeck: [
          { seatNumber: "L1", row: 1, column: 1, type: "SEATER" },
          { seatNumber: "L2", row: 1, column: 2, type: "SEATER" },
          { seatNumber: "L3", row: 2, column: 1, type: "SEATER" },
          { seatNumber: "L4", row: 2, column: 2, type: "SEATER" },
        ],
      },
    },
    // Add more dummy data here...
  ];
  
  async function seedBuses() {
    try {
      for (const bus of buses) {
        await busModel.updateOne(
          { busNumber: bus.busNumber }, // Unique identifier
          { $set: bus },
          { upsert: true } // Insert the document if it doesn't exist
        );
      }
      console.log("Buses data upserted successfully");
      mongoose.connection.close();
    } catch (error) {
      console.error("Error upserting buses data:", error);
      mongoose.connection.close();
    }
  }
  
  seedBuses();
  module.exports = { connectDb };