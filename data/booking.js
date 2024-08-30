const mongoose = require("mongoose");

const bookings = [
  {
    tripId: "", // Replace with actual trip ObjectId
    userId: "", // Replace with actual user ObjectId
    bookingTime: Math.floor(new Date("2024-08-30T06:00:00Z").getTime()), // Epoch time in milliseconds
    seatsInfo: [
      {
        paidAmount: 500,
        seatNumber: "A1",
        name: "Alice Smith",
        gender: "F",
        age: 30,
      },
    ],
    pocDetails: {
      phoneNumber: "1234567890",
      email: "alice.smith@example.com",
    },
    boardingPointId: 1, // Replace with actual stopId
    droppingPointId: 3, // Replace with actual stopId
  },
  {
    tripId: "", // Replace with actual trip ObjectId
    userId: "", // Replace with actual user ObjectId
    bookingTime: Math.floor(new Date("2024-08-30T07:00:00Z").getTime()), // Epoch time in milliseconds
    seatsInfo: [
      {
        paidAmount: 600,
        seatNumber: "B2",
        name: "Bob Johnson",
        gender: "M",
        age: 25,
      },
    ],
    pocDetails: {
      phoneNumber: "2345678901",
      email: "bob.johnson@example.com",
    },
    boardingPointId: 2, // Replace with actual stopId
    droppingPointId: 4, // Replace with actual stopId
  },
  {
    tripId: "", // Replace with actual trip ObjectId
    userId: "", // Replace with actual user ObjectId
    bookingTime: Math.floor(new Date("2024-08-30T08:00:00Z").getTime()), // Epoch time in milliseconds
    seatsInfo: [
      {
        paidAmount: 550,
        seatNumber: "C3",
        name: "Charlie Brown",
        gender: "M",
        age: 35,
      },
    ],
    pocDetails: {
      phoneNumber: "3456789012",
      email: "charlie.brown@example.com",
    },
    boardingPointId: 3, // Replace with actual stopId
    droppingPointId: 5, // Replace with actual stopId
  },
  {
    tripId: "", // Replace with actual trip ObjectId
    userId: "", // Replace with actual user ObjectId
    bookingTime: Math.floor(new Date("2024-08-30T09:00:00Z").getTime()), // Epoch time in milliseconds
    seatsInfo: [
      {
        paidAmount: 700,
        seatNumber: "D4",
        name: "Diana Prince",
        gender: "F",
        age: 28,
      },
    ],
    pocDetails: {
      phoneNumber: "4567890123",
      email: "diana.prince@example.com",
    },
    boardingPointId: 4, // Replace with actual stopId
    droppingPointId: 6, // Replace with actual stopId
  },
  {
    tripId: "", // Replace with actual trip ObjectId
    userId: "", // Replace with actual user ObjectId
    bookingTime: Math.floor(new Date("2024-08-30T10:00:00Z").getTime()), // Epoch time in milliseconds
    seatsInfo: [
      {
        paidAmount: 650,
        seatNumber: "E5",
        name: "Eve Adams",
        gender: "F",
        age: 22,
      },
    ],
    pocDetails: {
      phoneNumber: "5678901234",
      email: "eve.adams@example.com",
    },
    boardingPointId: 5, // Replace with actual stopId
    droppingPointId: 7, // Replace with actual stopId
  },
  {
    tripId: "", // Replace with actual trip ObjectId
    userId: "", // Replace with actual user ObjectId
    bookingTime: Math.floor(new Date("2024-08-30T11:00:00Z").getTime()), // Epoch time in milliseconds
    seatsInfo: [
      {
        paidAmount: 600,
        seatNumber: "F6",
        name: "Frank Castle",
        gender: "M",
        age: 40,
      },
    ],
    pocDetails: {
      phoneNumber: "6789012345",
      email: "frank.castle@example.com",
    },
    boardingPointId: 6, // Replace with actual stopId
    droppingPointId: 8, // Replace with actual stopId
  },
  {
    tripId: "", // Replace with actual trip ObjectId
    userId: "", // Replace with actual user ObjectId
    bookingTime: Math.floor(new Date("2024-08-30T12:00:00Z").getTime()), // Epoch time in milliseconds
    seatsInfo: [
      {
        paidAmount: 620,
        seatNumber: "G7",
        name: "Grace Lee",
        gender: "F",
        age: 33,
      },
    ],
    pocDetails: {
      phoneNumber: "7890123456",
      email: "grace.lee@example.com",
    },
    boardingPointId: 7, // Replace with actual stopId
    droppingPointId: 9, // Replace with actual stopId
  },
  {
    tripId: "", // Replace with actual trip ObjectId
    userId: "", // Replace with actual user ObjectId
    bookingTime: Math.floor(new Date("2024-08-30T13:00:00Z").getTime()), // Epoch time in milliseconds
    seatsInfo: [
      {
        paidAmount: 670,
        seatNumber: "H8",
        name: "Hannah Miller",
        gender: "F",
        age: 27,
      },
    ],
    pocDetails: {
      phoneNumber: "8901234567",
      email: "hannah.miller@example.com",
    },
    boardingPointId: 8, // Replace with actual stopId
    droppingPointId: 10, // Replace with actual stopId
  },
  {
    tripId: "", // Replace with actual trip ObjectId
    userId: "", // Replace with actual user ObjectId
    bookingTime: Math.floor(new Date("2024-08-30T14:00:00Z").getTime()), // Epoch time in milliseconds
    seatsInfo: [
      {
        paidAmount: 640,
        seatNumber: "I9",
        name: "Ian Turner",
        gender: "M",
        age: 31,
      },
    ],
    pocDetails: {
      phoneNumber: "9012345678",
      email: "ian.turner@example.com",
    },
    boardingPointId: 9, // Replace with actual stopId
    droppingPointId: 11, // Replace with actual stopId
  },
  {
    tripId: "", // Replace with actual trip ObjectId
    userId: "", // Replace with actual user ObjectId
    bookingTime: Math.floor(new Date("2024-08-30T15:00:00Z").getTime()), // Epoch time in milliseconds
    seatsInfo: [
      {
        paidAmount: 610,
        seatNumber: "J10",
        name: "Jasmine Rodriguez",
        gender: "F",
        age: 29,
      },
    ],
    pocDetails: {
      phoneNumber: "0123456789",
      email: "jasmine.rodriguez@example.com",
    },
    boardingPointId: 10, // Replace with actual stopId
    droppingPointId: 12, // Replace with actual stopId
  },
  {
    tripId: "", // Replace with actual trip ObjectId
    userId: "", // Replace with actual user ObjectId
    bookingTime: Math.floor(new Date("2024-08-30T16:00:00Z").getTime()), // Epoch time in milliseconds
    seatsInfo: [
      {
        paidAmount: 660,
        seatNumber: "K11",
        name: "Kevin Brown",
        gender: "M",
        age: 38,
      },
    ],
    pocDetails: {
      phoneNumber: "1234509876",
      email: "kevin.brown@example.com",
    },
    boardingPointId: 11, // Replace with actual stopId
    droppingPointId: 13, // Replace with actual stopId
  },
  {
    tripId: "", // Replace with actual trip ObjectId
    userId: "", // Replace with actual user ObjectId
    bookingTime: Math.floor(new Date("2024-08-30T17:00:00Z").getTime()), // Epoch time in milliseconds
    seatsInfo: [
      {
        paidAmount: 690,
        seatNumber: "L12",
        name: "Laura Green",
        gender: "F",
        age: 26,
      },
    ],
    pocDetails: {
      phoneNumber: "2345098765",
      email: "laura.green@example.com",
    },
    boardingPointId: 12, // Replace with actual stopId
    droppingPointId: 14, // Replace with actual stopId
  },
  {
    tripId: "", // Replace with actual trip ObjectId
    userId: "", // Replace with actual user ObjectId
    bookingTime: Math.floor(new Date("2024-08-30T18:00:00Z").getTime()), // Epoch time in milliseconds
    seatsInfo: [
      {
        paidAmount: 700,
        seatNumber: "M13",
        name: "Michael Johnson",
        gender: "M",
        age: 32,
      },
    ],
    pocDetails: {
      phoneNumber: "3456098765",
      email: "michael.johnson@example.com",
    },
    boardingPointId: 13, // Replace with actual stopId
    droppingPointId: 15, // Replace with actual stopId
  },
  {
    tripId: "", // Replace with actual trip ObjectId
    userId: "", // Replace with actual user ObjectId
    bookingTime: Math.floor(new Date("2024-08-30T19:00:00Z").getTime()), // Epoch time in milliseconds
    seatsInfo: [
      {
        paidAmount: 680,
        seatNumber: "N14",
        name: "Nina Patel",
        gender: "F",
        age: 24,
      },
    ],
    pocDetails: {
      phoneNumber: "4560789012",
      email: "nina.patel@example.com",
    },
    boardingPointId: 14, // Replace with actual stopId
    droppingPointId: 16, // Replace with actual stopId
  },
];

module.exports = bookings;
