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
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 5, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-08-30T09:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 6, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-08-30T09:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 7, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-08-30T12:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 8, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-08-30T12:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    prices: [
      {
        seatNumber: "B1",
        price: 600,
      },
      {
        seatNumber: "B2",
        price: 600,
      },
    ],
    startTime: Math.floor(new Date("2024-08-30T08:00:00Z").getTime()), // Epoch time in milliseconds
    endTime: Math.floor(new Date("2024-08-30T13:00:00Z").getTime()), // Epoch time in milliseconds
    driverDetails: {
      contactNumber: "0987654321",
      name: "Jane Smith",
    },
  },
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 9, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-08-30T10:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 10, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-08-30T10:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 11, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-08-30T14:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 12, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-08-30T14:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    prices: [
      {
        seatNumber: "C1",
        price: 550,
      },
      {
        seatNumber: "C2",
        price: 550,
      },
    ],
    startTime: Math.floor(new Date("2024-08-30T09:00:00Z").getTime()), // Epoch time in milliseconds
    endTime: Math.floor(new Date("2024-08-30T15:00:00Z").getTime()), // Epoch time in milliseconds
    driverDetails: {
      contactNumber: "1234509876",
      name: "Mike Johnson",
    },
  },
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 13, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-08-30T11:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 14, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-08-30T11:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 15, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-08-30T16:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 16, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-08-30T16:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    prices: [
      {
        seatNumber: "D1",
        price: 620,
      },
      {
        seatNumber: "D2",
        price: 620,
      },
    ],
    startTime: Math.floor(new Date("2024-08-30T10:00:00Z").getTime()), // Epoch time in milliseconds
    endTime: Math.floor(new Date("2024-08-30T17:00:00Z").getTime()), // Epoch time in milliseconds
    driverDetails: {
      contactNumber: "2345678901",
      name: "Alice Brown",
    },
  },
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 17, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-08-30T12:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 18, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-08-30T12:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 19, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-08-30T18:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 20, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-08-30T18:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    prices: [
      {
        seatNumber: "E1",
        price: 630,
      },
      {
        seatNumber: "E2",
        price: 630,
      },
    ],
    startTime: Math.floor(new Date("2024-08-30T11:00:00Z").getTime()), // Epoch time in milliseconds
    endTime: Math.floor(new Date("2024-08-30T19:00:00Z").getTime()), // Epoch time in milliseconds
    driverDetails: {
      contactNumber: "3456789012",
      name: "Bob White",
    },
  },

  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 1, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-11-01T08:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 2, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-11-01T08:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 3, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-11-01T11:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 4, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-11-01T11:30:00Z").getTime()), // Epoch time in milliseconds
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
    startTime: Math.floor(new Date("2024-11-01T07:00:00Z").getTime()), // Epoch time in milliseconds
    endTime: Math.floor(new Date("2024-11-01T12:00:00Z").getTime()), // Epoch time in milliseconds
    driverDetails: {
      contactNumber: "1234567890",
      name: "John Doe",
    },
  },
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 5, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-11-01T09:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 6, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-11-01T09:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 7, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-11-01T12:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 8, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-11-01T12:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    prices: [
      {
        seatNumber: "B1",
        price: 600,
      },
      {
        seatNumber: "B2",
        price: 600,
      },
    ],
    startTime: Math.floor(new Date("2024-11-01T08:00:00Z").getTime()), // Epoch time in milliseconds
    endTime: Math.floor(new Date("2024-11-01T13:00:00Z").getTime()), // Epoch time in milliseconds
    driverDetails: {
      contactNumber: "0987654321",
      name: "Jane Smith",
    },
  },
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 9, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-11-01T10:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 10, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-11-01T10:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 11, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-11-01T14:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 12, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-11-01T14:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    prices: [
      {
        seatNumber: "C1",
        price: 550,
      },
      {
        seatNumber: "C2",
        price: 550,
      },
    ],
    startTime: Math.floor(new Date("2024-11-01T09:00:00Z").getTime()), // Epoch time in milliseconds
    endTime: Math.floor(new Date("2024-11-01T15:00:00Z").getTime()), // Epoch time in milliseconds
    driverDetails: {
      contactNumber: "1234509876",
      name: "Mike Johnson",
    },
  },

  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 1,
        arrivalTime: Math.floor(new Date("2024-08-31T08:00:00Z").getTime()),
      },
      {
        stopId: 2,
        arrivalTime: Math.floor(new Date("2024-08-31T08:30:00Z").getTime()),
      },
    ],
    droppingPoints: [
      {
        stopId: 3,
        arrivalTime: Math.floor(new Date("2024-08-31T11:00:00Z").getTime()),
      },
      {
        stopId: 4,
        arrivalTime: Math.floor(new Date("2024-08-31T11:30:00Z").getTime()),
      },
    ],
    prices: [
      { seatNumber: "A1", price: 500 },
      { seatNumber: "A2", price: 500 },
    ],
    startTime: Math.floor(new Date("2024-08-31T07:00:00Z").getTime()),
    endTime: Math.floor(new Date("2024-08-31T12:00:00Z").getTime()),
    driverDetails: {
      contactNumber: "1234567890",
      name: "John Doe",
    },
  },
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 5,
        arrivalTime: Math.floor(new Date("2024-08-31T09:00:00Z").getTime()),
      },
      {
        stopId: 6,
        arrivalTime: Math.floor(new Date("2024-08-31T09:30:00Z").getTime()),
      },
    ],
    droppingPoints: [
      {
        stopId: 7,
        arrivalTime: Math.floor(new Date("2024-08-31T12:00:00Z").getTime()),
      },
      {
        stopId: 8,
        arrivalTime: Math.floor(new Date("2024-08-31T12:30:00Z").getTime()),
      },
    ],
    prices: [
      { seatNumber: "B1", price: 600 },
      { seatNumber: "B2", price: 600 },
    ],
    startTime: Math.floor(new Date("2024-08-31T08:00:00Z").getTime()),
    endTime: Math.floor(new Date("2024-08-31T13:00:00Z").getTime()),
    driverDetails: {
      contactNumber: "0987654321",
      name: "Jane Smith",
    },
  },
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 9,
        arrivalTime: Math.floor(new Date("2024-08-31T10:00:00Z").getTime()),
      },
      {
        stopId: 10,
        arrivalTime: Math.floor(new Date("2024-08-31T10:30:00Z").getTime()),
      },
    ],
    droppingPoints: [
      {
        stopId: 11,
        arrivalTime: Math.floor(new Date("2024-08-31T14:00:00Z").getTime()),
      },
      {
        stopId: 12,
        arrivalTime: Math.floor(new Date("2024-08-31T14:30:00Z").getTime()),
      },
    ],
    prices: [
      { seatNumber: "C1", price: 550 },
      { seatNumber: "C2", price: 550 },
    ],
    startTime: Math.floor(new Date("2024-08-31T09:00:00Z").getTime()),
    endTime: Math.floor(new Date("2024-08-31T15:00:00Z").getTime()),
    driverDetails: {
      contactNumber: "1234509876",
      name: "Mike Johnson",
    },
  },
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 13,
        arrivalTime: Math.floor(new Date("2024-08-31T11:00:00Z").getTime()),
      },
      {
        stopId: 14,
        arrivalTime: Math.floor(new Date("2024-08-31T11:30:00Z").getTime()),
      },
    ],
    droppingPoints: [
      {
        stopId: 15,
        arrivalTime: Math.floor(new Date("2024-08-31T16:00:00Z").getTime()),
      },
      {
        stopId: 16,
        arrivalTime: Math.floor(new Date("2024-08-31T16:30:00Z").getTime()),
      },
    ],
    prices: [
      { seatNumber: "D1", price: 620 },
      { seatNumber: "D2", price: 620 },
    ],
    startTime: Math.floor(new Date("2024-08-31T10:00:00Z").getTime()),
    endTime: Math.floor(new Date("2024-08-31T17:00:00Z").getTime()),
    driverDetails: {
      contactNumber: "2345678901",
      name: "Alice Brown",
    },
  },
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 17,
        arrivalTime: Math.floor(new Date("2024-08-31T12:00:00Z").getTime()),
      },
      {
        stopId: 18,
        arrivalTime: Math.floor(new Date("2024-08-31T12:30:00Z").getTime()),
      },
    ],
    droppingPoints: [
      {
        stopId: 19,
        arrivalTime: Math.floor(new Date("2024-08-31T18:00:00Z").getTime()),
      },
      {
        stopId: 20,
        arrivalTime: Math.floor(new Date("2024-08-31T18:30:00Z").getTime()),
      },
    ],
    prices: [
      { seatNumber: "E1", price: 630 },
      { seatNumber: "E2", price: 630 },
    ],
    startTime: Math.floor(new Date("2024-08-31T11:00:00Z").getTime()),
    endTime: Math.floor(new Date("2024-08-31T19:00:00Z").getTime()),
    driverDetails: {
      contactNumber: "3456789012",
      name: "Bob White",
    },
  },

  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 1, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-09-01T08:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 2, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-09-01T08:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 3, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-09-01T11:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 4, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-09-01T11:30:00Z").getTime()), // Epoch time in milliseconds
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
    startTime: Math.floor(new Date("2024-09-01T07:00:00Z").getTime()), // Epoch time in milliseconds
    endTime: Math.floor(new Date("2024-09-01T12:00:00Z").getTime()), // Epoch time in milliseconds
    driverDetails: {
      contactNumber: "1234567890",
      name: "John Doe",
    },
  },
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 5, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-09-01T09:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 6, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-09-01T09:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 7, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-09-01T12:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 8, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-09-01T12:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    prices: [
      {
        seatNumber: "B1",
        price: 600,
      },
      {
        seatNumber: "B2",
        price: 600,
      },
    ],
    startTime: Math.floor(new Date("2024-09-01T08:00:00Z").getTime()), // Epoch time in milliseconds
    endTime: Math.floor(new Date("2024-09-01T13:00:00Z").getTime()), // Epoch time in milliseconds
    driverDetails: {
      contactNumber: "0987654321",
      name: "Jane Smith",
    },
  },
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 9, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-09-01T10:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 10, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-09-01T10:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 11, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-09-01T14:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 12, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-09-01T14:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    prices: [
      {
        seatNumber: "C1",
        price: 550,
      },
      {
        seatNumber: "C2",
        price: 550,
      },
    ],
    startTime: Math.floor(new Date("2024-09-01T09:00:00Z").getTime()), // Epoch time in milliseconds
    endTime: Math.floor(new Date("2024-09-01T15:00:00Z").getTime()), // Epoch time in milliseconds
    driverDetails: {
      contactNumber: "1234509876",
      name: "Mike Johnson",
    },
  },
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 13, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-09-01T11:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 14, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-09-01T11:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 15, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-09-01T16:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 16, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-09-01T16:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    prices: [
      {
        seatNumber: "D1",
        price: 620,
      },
      {
        seatNumber: "D2",
        price: 620,
      },
    ],
    startTime: Math.floor(new Date("2024-09-01T10:00:00Z").getTime()), // Epoch time in milliseconds
    endTime: Math.floor(new Date("2024-09-01T17:00:00Z").getTime()), // Epoch time in milliseconds
    driverDetails: {
      contactNumber: "2345678901",
      name: "Alice Brown",
    },
  },
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 17, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-09-01T12:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 18, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-09-01T12:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 19, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-09-01T18:00:00Z").getTime()), // Epoch time in milliseconds
      },
      {
        stopId: 20, // Replace with actual stopId
        arrivalTime: Math.floor(new Date("2024-09-01T18:30:00Z").getTime()), // Epoch time in milliseconds
      },
    ],
    prices: [
      {
        seatNumber: "E1",
        price: 630,
      },
      {
        seatNumber: "E2",
        price: 630,
      },
    ],
    startTime: Math.floor(new Date("2024-09-01T11:00:00Z").getTime()), // Epoch time in milliseconds
    endTime: Math.floor(new Date("2024-09-01T19:00:00Z").getTime()), // Epoch time in milliseconds
    driverDetails: {
      contactNumber: "3456789012",
      name: "Bob White",
    },
  },

  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 1,
        arrivalTime: 1725120000000, // Epoch time in milliseconds
      },
      {
        stopId: 2,
        arrivalTime: 1725120000000, // Epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 3,
        arrivalTime: 1725120000000, // Epoch time in milliseconds
      },
      {
        stopId: 4,
        arrivalTime: 1725120000000, // Epoch time in milliseconds
      },
    ],
    prices: [
      { seatNumber: "A1", price: 500 },
      { seatNumber: "A2", price: 500 },
    ],
    startTime: 1725120000000, // Epoch time in milliseconds
    endTime: 1725120000000, // Epoch time in milliseconds
    driverDetails: {
      contactNumber: "1234567890",
      name: "John Doe",
    },
  },
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 5,
        arrivalTime: 1725120000000, // Epoch time in milliseconds
      },
      {
        stopId: 6,
        arrivalTime: 1725120000000, // Epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 7,
        arrivalTime: 1725120000000, // Epoch time in milliseconds
      },
      {
        stopId: 8,
        arrivalTime: 1725120000000, // Epoch time in milliseconds
      },
    ],
    prices: [
      { seatNumber: "B1", price: 600 },
      { seatNumber: "B2", price: 600 },
    ],
    startTime: 1725120000000, // Epoch time in milliseconds
    endTime: 1725120000000, // Epoch time in milliseconds
    driverDetails: {
      contactNumber: "0987654321",
      name: "Jane Smith",
    },
  },
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 9,
        arrivalTime: 1725120000000, // Epoch time in milliseconds
      },
      {
        stopId: 10,
        arrivalTime: 1725120000000, // Epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 11,
        arrivalTime: 1725120000000, // Epoch time in milliseconds
      },
      {
        stopId: 12,
        arrivalTime: 1725120000000, // Epoch time in milliseconds
      },
    ],
    prices: [
      { seatNumber: "C1", price: 550 },
      { seatNumber: "C2", price: 550 },
    ],
    startTime: 1725120000000, // Epoch time in milliseconds
    endTime: 1725120000000, // Epoch time in milliseconds
    driverDetails: {
      contactNumber: "1234509876",
      name: "Mike Johnson",
    },
  },
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 13,
        arrivalTime: 1725120000000, // Epoch time in milliseconds
      },
      {
        stopId: 14,
        arrivalTime: 1725120000000, // Epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 15,
        arrivalTime: 1725120000000, // Epoch time in milliseconds
      },
      {
        stopId: 16,
        arrivalTime: 1725120000000, // Epoch time in milliseconds
      },
    ],
    prices: [
      { seatNumber: "D1", price: 620 },
      { seatNumber: "D2", price: 620 },
    ],
    startTime: 1725120000000, // Epoch time in milliseconds
    endTime: 1725120000000, // Epoch time in milliseconds
    driverDetails: {
      contactNumber: "2345678901",
      name: "Alice Brown",
    },
  },
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 17,
        arrivalTime: 1725120000000, // Epoch time in milliseconds
      },
      {
        stopId: 18,
        arrivalTime: 1725120000000, // Epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 19,
        arrivalTime: 1725120000000, // Epoch time in milliseconds
      },
      {
        stopId: 20,
        arrivalTime: 1725120000000, // Epoch time in milliseconds
      },
    ],
    prices: [
      { seatNumber: "E1", price: 630 },
      { seatNumber: "E2", price: 630 },
    ],
    startTime: 1725120000000, // Epoch time in milliseconds
    endTime: 1725120000000, // Epoch time in milliseconds
    driverDetails: {
      contactNumber: "3456789012",
      name: "Bob White",
    },
  },

  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 1,
        arrivalTime: 1725280200000, // Updated epoch time in milliseconds
      },
      {
        stopId: 2,
        arrivalTime: 1725280200000, // Updated epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 3,
        arrivalTime: 1725280200000, // Updated epoch time in milliseconds
      },
      {
        stopId: 4,
        arrivalTime: 1725280200000, // Updated epoch time in milliseconds
      },
    ],
    prices: [
      { seatNumber: "A1", price: 500 },
      { seatNumber: "A2", price: 500 },
    ],
    startTime: 1725280200000, // Updated epoch time in milliseconds
    endTime: 1725280200000, // Updated epoch time in milliseconds
    driverDetails: {
      contactNumber: "1234567890",
      name: "John Doe",
    },
  },
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 5,
        arrivalTime: 1725280200000, // Updated epoch time in milliseconds
      },
      {
        stopId: 6,
        arrivalTime: 1725280200000, // Updated epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 7,
        arrivalTime: 1725280200000, // Updated epoch time in milliseconds
      },
      {
        stopId: 8,
        arrivalTime: 1725280200000, // Updated epoch time in milliseconds
      },
    ],
    prices: [
      { seatNumber: "B1", price: 600 },
      { seatNumber: "B2", price: 600 },
    ],
    startTime: 1725280200000, // Updated epoch time in milliseconds
    endTime: 1725280200000, // Updated epoch time in milliseconds
    driverDetails: {
      contactNumber: "0987654321",
      name: "Jane Smith",
    },
  },
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 9,
        arrivalTime: 1725280200000, // Updated epoch time in milliseconds
      },
      {
        stopId: 10,
        arrivalTime: 1725280200000, // Updated epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 11,
        arrivalTime: 1725280200000, // Updated epoch time in milliseconds
      },
      {
        stopId: 12,
        arrivalTime: 1725280200000, // Updated epoch time in milliseconds
      },
    ],
    prices: [
      { seatNumber: "C1", price: 550 },
      { seatNumber: "C2", price: 550 },
    ],
    startTime: 1725280200000, // Updated epoch time in milliseconds
    endTime: 1725280200000, // Updated epoch time in milliseconds
    driverDetails: {
      contactNumber: "1234509876",
      name: "Mike Johnson",
    },
  },
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 13,
        arrivalTime: 1725280200000, // Updated epoch time in milliseconds
      },
      {
        stopId: 14,
        arrivalTime: 1725280200000, // Updated epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 15,
        arrivalTime: 1725280200000, // Updated epoch time in milliseconds
      },
      {
        stopId: 16,
        arrivalTime: 1725280200000, // Updated epoch time in milliseconds
      },
    ],
    prices: [
      { seatNumber: "D1", price: 620 },
      { seatNumber: "D2", price: 620 },
    ],
    startTime: 1725280200000, // Updated epoch time in milliseconds
    endTime: 1725280200000, // Updated epoch time in milliseconds
    driverDetails: {
      contactNumber: "2345678901",
      name: "Alice Brown",
    },
  },
  {
    source: "", // Replace with actual city ObjectId
    busId: "", // Replace with actual bus ObjectId
    destination: "", // Replace with actual city ObjectId
    boardingPoints: [
      {
        stopId: 17,
        arrivalTime: 1725280200000, // Updated epoch time in milliseconds
      },
      {
        stopId: 18,
        arrivalTime: 1725280200000, // Updated epoch time in milliseconds
      },
    ],
    droppingPoints: [
      {
        stopId: 19,
        arrivalTime: 1725280200000, // Updated epoch time in milliseconds
      },
      {
        stopId: 20,
        arrivalTime: 1725280200000, // Updated epoch time in milliseconds
      },
    ],
    prices: [
      { seatNumber: "E1", price: 630 },
      { seatNumber: "E2", price: 630 },
    ],
    startTime: 1725280200000, // Updated epoch time in milliseconds
    endTime: 1725280200000, // Updated epoch time in milliseconds
    driverDetails: {
      contactNumber: "3456789012",
      name: "Bob White",
    },
  },
];

module.exports = trips;
