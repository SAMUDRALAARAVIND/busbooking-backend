const mongoose = require("mongoose");

const trips = [
  {
    source: '', // Replace with actual city ObjectId
    busId: '', // Replace with actual bus ObjectId
    destination: '', // Replace with actual city ObjectId
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
    source: '', // Replace with actual city ObjectId
    busId: '', // Replace with actual bus ObjectId
    destination: '', // Replace with actual city ObjectId
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
    source: '', // Replace with actual city ObjectId
    busId: '', // Replace with actual bus ObjectId
    destination: '', // Replace with actual city ObjectId
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
    source: '', // Replace with actual city ObjectId
    busId: '', // Replace with actual bus ObjectId
    destination: '', // Replace with actual city ObjectId
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
    source: '', // Replace with actual city ObjectId
    busId: '', // Replace with actual bus ObjectId
    destination: '', // Replace with actual city ObjectId
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
];

module.exports = trips;
