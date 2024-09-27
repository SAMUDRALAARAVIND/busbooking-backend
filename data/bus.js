const buses = [
  {
    busPartner: "Trans India Travels",
    busType: "AC",
    amenities: ["WIFI", "CHARGING_PORT", "EMERGENCY_EXIT"],
    busNumber: "MH12AB1234",
    layout: {
      upperDeck: [
        { seatNumber: "U1", type: "SEATER", row: 1, column: 1 },
        { seatNumber: "U4", type: "SEATER", row: 1, column: 2 },
        { seatNumber: "U7", type: "SEATER", row: 1, column: 3 },
        { seatNumber: "U10", type: "SEATER", row: 1, column: 4 },
        { seatNumber: "U13", type: "SEATER", row: 1, column: 5 },
        { seatNumber: "U16", type: "SEATER", row: 1, column: 6 },
        // { seatNumber: "U19", gender: null, row: 1, column: 7, price: 320 },
        { seatNumber: "U2", type: "SEATER", row: 2, column: 1 },
        { seatNumber: "U5", type: "SEATER", row: 2, column: 2 },
        { seatNumber: "U8", type: "SEATER", row: 2, column: 3 },
        { seatNumber: "U11", type: "SEATER", row: 2, column: 4 },
        { seatNumber: "U14", type: "SEATER", row: 2, column: 5 },
        { seatNumber: "U17", type: "SEATER", row: 2, column: 6 },
        // { seatNumber: "U20", gender: null, row: 2, column: 7, price: 320 },

        { seatNumber: "U3", type: "SEATER", row: 3, column: 1 },
        { seatNumber: "U6", type: "SEATER", row: 3, column: 2 },
        { seatNumber: "U9", type: "SEATER", row: 3, column: 3 },
        { seatNumber: "U12", type: "SEATER", row: 3, column: 4 },
        { seatNumber: "U15", type: "SEATER", row: 3, column: 5 },
        { seatNumber: "U18", type: "SEATER", row: 3, column: 6 },
        // { seatNumber: "U21", gender: "F", row: 3, column: 7, price: 350 },
      ],
      lowerDeck: [
        { seatNumber: "L1", type: "SEATER", row: 1, column: 1 },
        { seatNumber: "L4", type: "SEATER", row: 1, column: 2 },
        { seatNumber: "L7", type: "SEATER", row: 1, column: 3 },
        { seatNumber: "L10", type: "SEATER", row: 1, column: 4 },
        { seatNumber: "L13", type: "SEATER", row: 1, column: 5 },
        { seatNumber: "L16", type: "SEATER", row: 1, column: 6 },
        // { seatNumber: "L19", type: "SEATER", row: 1, column: 7 },

        { seatNumber: "L2", type: "SEATER", row: 2, column: 1 },
        { seatNumber: "L5", type: "SEATER", row: 2, column: 2 },
        { seatNumber: "L8", type: "SEATER", row: 2, column: 3 },
        { seatNumber: "L11", type: "SEATER", row: 2, column: 4 },
        { seatNumber: "L14", type: "SEATER", row: 2, column: 5 },
        { seatNumber: "L17", type: "SEATER", row: 2, column: 6 },
        // { seatNumber: "L20", gender: null, row: 2, column: 7, price: 320 },

        { seatNumber: "L3", type: "SEATER", row: 3, column: 1 },
        { seatNumber: "L6", type: "SEATER", row: 3, column: 2 },
        { seatNumber: "L9", type: "SEATER", row: 3, column: 3 },
        { seatNumber: "L12", type: "SEATER", row: 3, column: 4 },
        { seatNumber: "L15", type: "SEATER", row: 3, column: 5 },
        { seatNumber: "L18", type: "SEATER", row: 3, column: 6 },
        // { seatNumber: "L21", gender: "F", row: 3, column: 7, price: 350 },
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
        { seatNumber: "U1", type: "SEATER", row: 1, column: 1 },
        { seatNumber: "U4", type: "SEATER", row: 1, column: 2 },
        { seatNumber: "U7", type: "SEATER", row: 1, column: 3 },
        { seatNumber: "U10", type: "SEATER", row: 1, column: 4 },
        { seatNumber: "U13", type: "SEATER", row: 1, column: 5 },
        { seatNumber: "U16", type: "SEATER", row: 1, column: 6 },
        // { seatNumber: "U19", gender: null, row: 1, column: 7, price: 320 },
        { seatNumber: "U2", type: "SEATER", row: 2, column: 1 },
        { seatNumber: "U5", type: "SEATER", row: 2, column: 2 },
        { seatNumber: "U8", type: "SEATER", row: 2, column: 3 },
        { seatNumber: "U11", type: "SEATER", row: 2, column: 4 },
        { seatNumber: "U14", type: "SEATER", row: 2, column: 5 },
        { seatNumber: "U17", type: "SEATER", row: 2, column: 6 },
        // { seatNumber: "U20", gender: null, row: 2, column: 7, price: 320 },

        { seatNumber: "U3", type: "SEATER", row: 3, column: 1 },
        { seatNumber: "U6", type: "SEATER", row: 3, column: 2 },
        { seatNumber: "U9", type: "SEATER", row: 3, column: 3 },
        { seatNumber: "U12", type: "SEATER", row: 3, column: 4 },
        { seatNumber: "U15", type: "SEATER", row: 3, column: 5 },
        { seatNumber: "U18", type: "SEATER", row: 3, column: 6 },
        // { seatNumber: "U21", gender: "F", row: 3, column: 7, price: 350 },
      ],
      lowerDeck: [
        { seatNumber: "L1", type: "SEATER", row: 1, column: 1 },
        { seatNumber: "L4", type: "SEATER", row: 1, column: 2 },
        { seatNumber: "L7", type: "SEATER", row: 1, column: 3 },
        { seatNumber: "L10", type: "SEATER", row: 1, column: 4 },
        { seatNumber: "L13", type: "SEATER", row: 1, column: 5 },
        { seatNumber: "L16", type: "SEATER", row: 1, column: 6 },
        // { seatNumber: "L19", type: "SEATER", row: 1, column: 7 },

        { seatNumber: "L2", type: "SEATER", row: 2, column: 1 },
        { seatNumber: "L5", type: "SEATER", row: 2, column: 2 },
        { seatNumber: "L8", type: "SEATER", row: 2, column: 3 },
        { seatNumber: "L11", type: "SEATER", row: 2, column: 4 },
        { seatNumber: "L14", type: "SEATER", row: 2, column: 5 },
        { seatNumber: "L17", type: "SEATER", row: 2, column: 6 },
        // { seatNumber: "L20", gender: null, row: 2, column: 7, price: 320 },

        { seatNumber: "L3", type: "SEATER", row: 3, column: 1 },
        { seatNumber: "L6", type: "SEATER", row: 3, column: 2 },
        { seatNumber: "L9", type: "SEATER", row: 3, column: 3 },
        { seatNumber: "L12", type: "SEATER", row: 3, column: 4 },
        { seatNumber: "L15", type: "SEATER", row: 3, column: 5 },
        { seatNumber: "L18", type: "SEATER", row: 3, column: 6 },
        // { seatNumber: "L21", gender: "F", row: 3, column: 7, price: 350 },
      ],
    },
  },
  {
    busPartner: "Royal Travels",
    busType: "AC",
    amenities: ["WIFI", "CHARGING_PORT", "EMERGENCY_EXIT"],
    busNumber: "MH12CD4567",
    layout: {
      upperDeck: [
        { seatNumber: "U1", type: "SEATER", row: 1, column: 1 },
        { seatNumber: "U4", type: "SEATER", row: 1, column: 2 },
        { seatNumber: "U7", type: "SEATER", row: 1, column: 3 },
        { seatNumber: "U10", type: "SEATER", row: 1, column: 4 },
        { seatNumber: "U13", type: "SEATER", row: 1, column: 5 },
        { seatNumber: "U16", type: "SEATER", row: 1, column: 6 },
        // { seatNumber: "U19", gender: null, row: 1, column: 7, price: 320 },
        { seatNumber: "U2", type: "SEATER", row: 2, column: 1 },
        { seatNumber: "U5", type: "SEATER", row: 2, column: 2 },
        { seatNumber: "U8", type: "SEATER", row: 2, column: 3 },
        { seatNumber: "U11", type: "SEATER", row: 2, column: 4 },
        { seatNumber: "U14", type: "SEATER", row: 2, column: 5 },
        { seatNumber: "U17", type: "SEATER", row: 2, column: 6 },
        // { seatNumber: "U20", gender: null, row: 2, column: 7, price: 320 },

        { seatNumber: "U3", type: "SEATER", row: 3, column: 1 },
        { seatNumber: "U6", type: "SEATER", row: 3, column: 2 },
        { seatNumber: "U9", type: "SEATER", row: 3, column: 3 },
        { seatNumber: "U12", type: "SEATER", row: 3, column: 4 },
        { seatNumber: "U15", type: "SEATER", row: 3, column: 5 },
        { seatNumber: "U18", type: "SEATER", row: 3, column: 6 },
        // { seatNumber: "U21", gender: "F", row: 3, column: 7, price: 350 },
      ],
      lowerDeck: [
        { seatNumber: "L1", type: "SEATER", row: 1, column: 1 },
        { seatNumber: "L4", type: "SEATER", row: 1, column: 2 },
        { seatNumber: "L7", type: "SEATER", row: 1, column: 3 },
        { seatNumber: "L10", type: "SEATER", row: 1, column: 4 },
        { seatNumber: "L13", type: "SEATER", row: 1, column: 5 },
        { seatNumber: "L16", type: "SEATER", row: 1, column: 6 },
        // { seatNumber: "L19", type: "SEATER", row: 1, column: 7 },

        { seatNumber: "L2", type: "SEATER", row: 2, column: 1 },
        { seatNumber: "L5", type: "SEATER", row: 2, column: 2 },
        { seatNumber: "L8", type: "SEATER", row: 2, column: 3 },
        { seatNumber: "L11", type: "SEATER", row: 2, column: 4 },
        { seatNumber: "L14", type: "SEATER", row: 2, column: 5 },
        { seatNumber: "L17", type: "SEATER", row: 2, column: 6 },
        // { seatNumber: "L20", gender: null, row: 2, column: 7, price: 320 },

        { seatNumber: "L3", type: "SEATER", row: 3, column: 1 },
        { seatNumber: "L6", type: "SEATER", row: 3, column: 2 },
        { seatNumber: "L9", type: "SEATER", row: 3, column: 3 },
        { seatNumber: "L12", type: "SEATER", row: 3, column: 4 },
        { seatNumber: "L15", type: "SEATER", row: 3, column: 5 },
        { seatNumber: "L18", type: "SEATER", row: 3, column: 6 },
        // { seatNumber: "L21", gender: "F", row: 3, column: 7, price: 350 },
      ],
    },
  },
  {
    busPartner: "Kingdom Express",
    busType: "SLEEPER",
    amenities: ["WIFI", "WATER", "LIVE_TRACKING"],
    busNumber: "DL05XY1234",
    layout: {
      upperDeck: [
        { seatNumber: "U1", type: "SEATER", row: 1, column: 1 },
        { seatNumber: "U4", type: "SEATER", row: 1, column: 2 },
        { seatNumber: "U7", type: "SEATER", row: 1, column: 3 },
        { seatNumber: "U10", type: "SEATER", row: 1, column: 4 },
        { seatNumber: "U13", type: "SEATER", row: 1, column: 5 },
        { seatNumber: "U16", type: "SEATER", row: 1, column: 6 },
        // { seatNumber: "U19", gender: null, row: 1, column: 7, price: 320 },
        { seatNumber: "U2", type: "SEATER", row: 2, column: 1 },
        { seatNumber: "U5", type: "SEATER", row: 2, column: 2 },
        { seatNumber: "U8", type: "SEATER", row: 2, column: 3 },
        { seatNumber: "U11", type: "SEATER", row: 2, column: 4 },
        { seatNumber: "U14", type: "SEATER", row: 2, column: 5 },
        { seatNumber: "U17", type: "SEATER", row: 2, column: 6 },
        // { seatNumber: "U20", gender: null, row: 2, column: 7, price: 320 },

        { seatNumber: "U3", type: "SEATER", row: 3, column: 1 },
        { seatNumber: "U6", type: "SEATER", row: 3, column: 2 },
        { seatNumber: "U9", type: "SEATER", row: 3, column: 3 },
        { seatNumber: "U12", type: "SEATER", row: 3, column: 4 },
        { seatNumber: "U15", type: "SEATER", row: 3, column: 5 },
        { seatNumber: "U18", type: "SEATER", row: 3, column: 6 },
        // { seatNumber: "U21", gender: "F", row: 3, column: 7, price: 350 },
      ],
      lowerDeck: [
        { seatNumber: "L1", type: "SEATER", row: 1, column: 1 },
        { seatNumber: "L4", type: "SEATER", row: 1, column: 2 },
        { seatNumber: "L7", type: "SEATER", row: 1, column: 3 },
        { seatNumber: "L10", type: "SEATER", row: 1, column: 4 },
        { seatNumber: "L13", type: "SEATER", row: 1, column: 5 },
        { seatNumber: "L16", type: "SEATER", row: 1, column: 6 },
        // { seatNumber: "L19", type: "SEATER", row: 1, column: 7 },

        { seatNumber: "L2", type: "SEATER", row: 2, column: 1 },
        { seatNumber: "L5", type: "SEATER", row: 2, column: 2 },
        { seatNumber: "L8", type: "SEATER", row: 2, column: 3 },
        { seatNumber: "L11", type: "SEATER", row: 2, column: 4 },
        { seatNumber: "L14", type: "SEATER", row: 2, column: 5 },
        { seatNumber: "L17", type: "SEATER", row: 2, column: 6 },
        // { seatNumber: "L20", gender: null, row: 2, column: 7, price: 320 },

        { seatNumber: "L3", type: "SEATER", row: 3, column: 1 },
        { seatNumber: "L6", type: "SEATER", row: 3, column: 2 },
        { seatNumber: "L9", type: "SEATER", row: 3, column: 3 },
        { seatNumber: "L12", type: "SEATER", row: 3, column: 4 },
        { seatNumber: "L15", type: "SEATER", row: 3, column: 5 },
        { seatNumber: "L18", type: "SEATER", row: 3, column: 6 },
        // { seatNumber: "L21", gender: "F", row: 3, column: 7, price: 350 },
      ],
    },
  },
  {
    busPartner: "Skyline Bus Services",
    busType: "NON_AC",
    amenities: ["CHARGING_PORT", "WATER", "CCTV"],
    busNumber: "TN07AQ5678",
    layout: {
      upperDeck: [
        { seatNumber: "U1", type: "SEATER", row: 1, column: 1 },
        { seatNumber: "U4", type: "SEATER", row: 1, column: 2 },
        { seatNumber: "U7", type: "SEATER", row: 1, column: 3 },
        { seatNumber: "U10", type: "SEATER", row: 1, column: 4 },
        { seatNumber: "U13", type: "SEATER", row: 1, column: 5 },
        { seatNumber: "U16", type: "SEATER", row: 1, column: 6 },
        // { seatNumber: "U19", gender: null, row: 1, column: 7, price: 320 },
        { seatNumber: "U2", type: "SEATER", row: 2, column: 1 },
        { seatNumber: "U5", type: "SEATER", row: 2, column: 2 },
        { seatNumber: "U8", type: "SEATER", row: 2, column: 3 },
        { seatNumber: "U11", type: "SEATER", row: 2, column: 4 },
        { seatNumber: "U14", type: "SEATER", row: 2, column: 5 },
        { seatNumber: "U17", type: "SEATER", row: 2, column: 6 },
        // { seatNumber: "U20", gender: null, row: 2, column: 7, price: 320 },

        { seatNumber: "U3", type: "SEATER", row: 3, column: 1 },
        { seatNumber: "U6", type: "SEATER", row: 3, column: 2 },
        { seatNumber: "U9", type: "SEATER", row: 3, column: 3 },
        { seatNumber: "U12", type: "SEATER", row: 3, column: 4 },
        { seatNumber: "U15", type: "SEATER", row: 3, column: 5 },
        { seatNumber: "U18", type: "SEATER", row: 3, column: 6 },
        // { seatNumber: "U21", gender: "F", row: 3, column: 7, price: 350 },
      ],
      lowerDeck: [
        { seatNumber: "L1", type: "SEATER", row: 1, column: 1 },
        { seatNumber: "L4", type: "SEATER", row: 1, column: 2 },
        { seatNumber: "L7", type: "SEATER", row: 1, column: 3 },
        { seatNumber: "L10", type: "SEATER", row: 1, column: 4 },
        { seatNumber: "L13", type: "SEATER", row: 1, column: 5 },
        { seatNumber: "L16", type: "SEATER", row: 1, column: 6 },
        // { seatNumber: "L19", type: "SEATER", row: 1, column: 7 },

        { seatNumber: "L2", type: "SEATER", row: 2, column: 1 },
        { seatNumber: "L5", type: "SEATER", row: 2, column: 2 },
        { seatNumber: "L8", type: "SEATER", row: 2, column: 3 },
        { seatNumber: "L11", type: "SEATER", row: 2, column: 4 },
        { seatNumber: "L14", type: "SEATER", row: 2, column: 5 },
        { seatNumber: "L17", type: "SEATER", row: 2, column: 6 },
        // { seatNumber: "L20", gender: null, row: 2, column: 7, price: 320 },

        { seatNumber: "L3", type: "SEATER", row: 3, column: 1 },
        { seatNumber: "L6", type: "SEATER", row: 3, column: 2 },
        { seatNumber: "L9", type: "SEATER", row: 3, column: 3 },
        { seatNumber: "L12", type: "SEATER", row: 3, column: 4 },
        { seatNumber: "L15", type: "SEATER", row: 3, column: 5 },
        { seatNumber: "L18", type: "SEATER", row: 3, column: 6 },
        // { seatNumber: "L21", gender: "F", row: 3, column: 7, price: 350 },
      ],
    },
  },
];

// { seatNumber: "U1", row: 1, column: 1, type: "SEATER" },
// { seatNumber: "U2", row: 1, column: 2, type: "SEATER" },
// { seatNumber: "U3", row: 2, column: 1, type: "SEATER" },
// { seatNumber: "U4", row: 2, column: 2, type: "SEATER" },
// { seatNumber: "U5", row: 3, column: 1, type: "SEATER" },
// { seatNumber: "U6", row: 3, column: 2, type: "SEATER" },
// { seatNumber: "U7", row: 4, column: 1, type: "SEATER" },
// { seatNumber: "U8", row: 4, column: 2, type: "SEATER" },
// { seatNumber: "U9", row: 5, column: 1, type: "SEATER" },
// { seatNumber: "U10", row: 5, column: 2, type: "SEATER" },
// { seatNumber: "U11", row: 6, column: 1, type: "SEATER" },
// { seatNumber: "U12", row: 6, column: 2, type: "SEATER" },
// { seatNumber: "U13", row: 7, column: 1, type: "SEATER" },
// { seatNumber: "U14", row: 7, column: 2, type: "SEATER" },
// { seatNumber: "U15", row: 8, column: 1, type: "SEATER" },
// { seatNumber: "U16", row: 8, column: 2, type: "SEATER" },
// { seatNumber: "U17", row: 9, column: 1, type: "SEATER" },
// { seatNumber: "U18", row: 9, column: 2, type: "SEATER" },

module.exports = buses;

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
