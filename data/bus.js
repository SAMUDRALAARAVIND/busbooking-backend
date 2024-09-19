// const generateSeats = (rows, columns, type) => {
//   const seats = [];
//   let basePrice = 600
//   if(type === "SLEEPER") {
//      basePrice  += 400
//   }
//   for (let row = 1; row <= rows; row++) {
//     for (let col = 1; col <= columns; col++) {
//       isWindowSeat = (col === 1 || col === columns);
//       const seatPrice = isWindowSeat ? basePrice + 200 : basePrice
//       seats.push({
//         seatNumber: `${row}${String.fromCharCode(64 + col)}`,
//         type : type ,
//         price : seatPrice,
//         windowSeat:isWindowSeat
//       });
//     }
//   }
//   console.log(seats)
//   // return seats;
// };



// const buses = [
//   {
//     busPartner: "Trans India Travels",
//     busType: "AC",
//     amenities: ["WIFI", "CHARGING_PORT", "EMERGENCY_EXIT"],
//     busNumber: "MH12AB1234",
//     layout: {
//       lowerDeck : generateSeats(6, 4, 'SEATER'), 
//       upperDeck: generateSeats(3, 3, 'SLEEPER')  
//     },
//   },
//   {
//     busPartner: "City Express",
//     busType: "SLEEPER",
//     amenities: ["LIVE_TRACKING", "WATER", "EMERGENCY_EXIT"],
//     busNumber: "DL04XY5678",
//     layout: {
//       lowerDeck : generateSeats(6, 4, 'SEATER'), 
//       upperDeck: generateSeats(3, 3, 'SLEEPER')  
//     },
//   },
//   {
//     busPartner: "Super Bus Services",
//     busType: "NON_AC",
//     amenities: ["EMERGENCY_EXIT", "WATER"],
//     busNumber: "KA09CD1234",
//     layout: {
//       lowerDeck : generateSeats(6, 4, 'SEATER'), 
//       upperDeck: generateSeats(3, 3, 'SLEEPER')  
//     },
//   },
//   {
//     busPartner: "Luxury Travels",
//     busType: "SEATER",
//     amenities: ["WIFI", "CHARGING_PORT", "LIVE_TRACKING"],
//     busNumber: "RJ10EF5678",
//     layout: {
//       lowerDeck : generateSeats(6, 4, 'SEATER'), 
//       upperDeck: generateSeats(3, 3, 'SLEEPER')  
//     },
//   },
//   {
//     busPartner: "Highway Kings",
//     busType: "AC",
//     amenities: ["WIFI", "WATER", "EMERGENCY_EXIT", "CHARGING_PORT"],
//     busNumber: "TN22GH7890",
//     layout: {
//       lowerDeck : generateSeats(6, 4, 'SEATER'), 
//       upperDeck: generateSeats(3, 3, 'SLEEPER')  
//     },
//   },
// ];

// module.exports = buses;


const buses = [
  {
    busPartner: "Trans India Travels",
    busType: "AC",
    amenities: ["WIFI", "CHARGING_PORT", "EMERGENCY_EXIT"],
    busNumber: "MH12AB1234",
    layout: {
      upperDeck: [
        { seatNumber: "U1", row: 1, column: 1, type: "SEATER" },
        { seatNumber: "U2", row: 1, column: 2, type: "SEATER" },
        { seatNumber: "U3", row: 2, column: 1, type: "SEATER" },
        { seatNumber: "U4", row: 2, column: 2, type: "SEATER" },
      ],
      lowerDeck: [
        { seatNumber: "L1", row: 1, column: 1, type: "SLEEPER" },
        { seatNumber: "L2", row: 1, column: 2, type: "SLEEPER" },
        { seatNumber: "L3", row: 2, column: 1, type: "SEATER" },
        { seatNumber: "L4", row: 2, column: 2, type: "SEATER" },
      ],
    },
  },
  {
    busPartner: "City Express",
    busType: "SLEEPER",
    amenities: ["LIVE_TRACKING", "WATER", "EMERGENCY_EXIT"],
    busNumber: "DL04XY5678",
    layout: {
      upperDeck: [
        { seatNumber: "U1", row: 1, column: 1, type: "SLEEPER" },
        { seatNumber: "U2", row: 1, column: 2, type: "SLEEPER" },
      ],
      lowerDeck: [
        { seatNumber: "L1", row: 1, column: 1, type: "SLEEPER" },
        { seatNumber: "L2", row: 1, column: 2, type: "SLEEPER" },
        { seatNumber: "L3", row: 2, column: 1, type: "SLEEPER" },
        { seatNumber: "L4", row: 2, column: 2, type: "SLEEPER" },
      ],
    },
  },
  {
    busPartner: "Super Bus Services",
    busType: "NON_AC",
    amenities: ["EMERGENCY_EXIT", "WATER"],
    busNumber: "KA09CD1234",
    layout: {
      lowerDeck: [
        { seatNumber: "L1", row: 1, column: 1, type: "SEATER" },
        { seatNumber: "L2", row: 1, column: 2, type: "SEATER" },
        { seatNumber: "L3", row: 2, column: 1, type: "SEATER" },
        { seatNumber: "L4", row: 2, column: 2, type: "SEATER" },
      ],
    },
  },
  {
    busPartner: "Luxury Travels",
    busType: "SEATER",
    amenities: ["WIFI", "CHARGING_PORT", "LIVE_TRACKING"],
    busNumber: "RJ10EF5678",
    layout: {
      lowerDeck: [
        { seatNumber: "L1", row: 1, column: 1, type: "SEATER" },
        { seatNumber: "L2", row: 1, column: 2, type: "SEATER" },
        { seatNumber: "L3", row: 2, column: 1, type: "SEATER" },
        { seatNumber: "L4", row: 2, column: 2, type: "SEATER" },
        { seatNumber: "L5", row: 3, column: 1, type: "SEATER" },
        { seatNumber: "L6", row: 3, column: 2, type: "SEATER" },
      ],
    },
  },
  {
    busPartner: "Highway Kings",
    busType: "AC",
    amenities: ["WIFI", "WATER", "EMERGENCY_EXIT", "CHARGING_PORT"],
    busNumber: "TN22GH7890",
    layout: {
      lowerDeck: [
        { seatNumber: "L1", row: 1, column: 1, type: "SEATER" },
        { seatNumber: "L2", row: 1, column: 2, type: "SEATER" },
        { seatNumber: "L3", row: 2, column: 1, type: "SEATER" },
        { seatNumber: "L4", row: 2, column: 2, type: "SEATER" },
        { seatNumber: "L5", row: 3, column: 1, type: "SEATER" },
        { seatNumber: "L6", row: 3, column: 2, type: "SEATER" },
      ],
    },
  },
];

module.exports = buses;

