const mongoose = require("mongoose");

const cities = [
  {
    name: "Mumbai",
    state: "Maharashtra",
    lat: 19.076,
    lng: 72.8777,
    stopPoints: [
      {
        stopId: 1001, // Unique Numeric ID
        title: "Mumbai Central",
        directions: "Main Bus Station",
        lat: 18.9716,
        lng: 72.8194,
      },
      {
        stopId: 1002, // Unique Numeric ID
        title: "Andheri East",
        directions: "Near Metro Station",
        lat: 19.1136,
        lng: 72.8697,
      },
      {
        stopId: 1003, // Unique Numeric ID
        title: "Bandra West",
        directions: "Near Linking Road",
        lat: 19.06,
        lng: 72.83,
      },
      {
        stopId: 1004, // Unique Numeric ID
        title: "Dadar",
        directions: "Near Dadar Station",
        lat: 19.0183,
        lng: 72.8446,
      },
      {
        stopId: 1005, // Unique Numeric ID
        title: "Thane",
        directions: "Near Thane Station",
        lat: 19.2183,
        lng: 72.9781,
      },
      {
        stopId: 1006, // Unique Numeric ID
        title: "Navi Mumbai",
        directions: "Near Vashi Station",
        lat: 19.0771,
        lng: 73.0128,
      },
      {
        stopId: 1007, // Unique Numeric ID
        title: "Borivali",
        directions: "Near Borivali Station",
        lat: 19.229,
        lng: 72.8573,
      },
      {
        stopId: 1008, // Unique Numeric ID
        title: "Malad",
        directions: "Near Malad West",
        lat: 19.186,
        lng: 72.8484,
      },
    ],
    pincode: 400001,
  },
  {
    name: "Delhi",
    state: "Delhi",
    lat: 28.6139,
    lng: 77.209,
    stopPoints: [
      {
        stopId: 2001, // Unique Numeric ID
        title: "Kashmere Gate",
        directions: "ISBT",
        lat: 28.6676,
        lng: 77.2265,
      },
      {
        stopId: 2002, // Unique Numeric ID
        title: "Rajiv Chowk",
        directions: "Connaught Place",
        lat: 28.6328,
        lng: 77.2197,
      },
      {
        stopId: 2003, // Unique Numeric ID
        title: "Saket",
        directions: "Near Select City Walk",
        lat: 28.5273,
        lng: 77.2191,
      },
      {
        stopId: 2004, // Unique Numeric ID
        title: "Hauz Khas",
        directions: "Near Hauz Khas Village",
        lat: 28.5494,
        lng: 77.2017,
      },
      {
        stopId: 2005, // Unique Numeric ID
        title: "Dwarka Sector 21",
        directions: "Metro Station",
        lat: 28.5562,
        lng: 77.0689,
      },
      {
        stopId: 2006, // Unique Numeric ID
        title: "Lajpat Nagar",
        directions: "Near Central Market",
        lat: 28.5677,
        lng: 77.2433,
      },
      {
        stopId: 2007, // Unique Numeric ID
        title: "Nehru Place",
        directions: "Near Metro Station",
        lat: 28.55,
        lng: 77.2517,
      },
      {
        stopId: 2008, // Unique Numeric ID
        title: "Anand Vihar",
        directions: "ISBT",
        lat: 28.6501,
        lng: 77.315,
      },
    ],
    pincode: 110001,
  },
  {
    name: "Bengaluru",
    state: "Karnataka",
    lat: 12.9716,
    lng: 77.5946,
    stopPoints: [
      {
        stopId: 3001, // Unique Numeric ID
        title: "Majestic",
        directions: "Kempegowda Bus Station",
        lat: 12.9778,
        lng: 77.5713,
      },
      {
        stopId: 3002, // Unique Numeric ID
        title: "Electronic City",
        directions: "Phase 1",
        lat: 12.8391,
        lng: 77.6774,
      },
      {
        stopId: 3003, // Unique Numeric ID
        title: "Whitefield",
        directions: "Near ITPL",
        lat: 12.9719,
        lng: 77.7499,
      },
      {
        stopId: 3004, // Unique Numeric ID
        title: "Koramangala",
        directions: "Near Forum Mall",
        lat: 12.9352,
        lng: 77.6245,
      },
      {
        stopId: 3005, // Unique Numeric ID
        title: "Indiranagar",
        directions: "Near Metro Station",
        lat: 12.9718,
        lng: 77.6412,
      },
      {
        stopId: 3006, // Unique Numeric ID
        title: "Hebbal",
        directions: "Hebbal Flyover",
        lat: 13.0352,
        lng: 77.5882,
      },
      {
        stopId: 3007, // Unique Numeric ID
        title: "Yeshwanthpur",
        directions: "Near Yeshwanthpur Station",
        lat: 13.0285,
        lng: 77.5409,
      },
      {
        stopId: 3008, // Unique Numeric ID
        title: "Jayanagar",
        directions: "Near Jayanagar 4th Block",
        lat: 12.925,
        lng: 77.5938,
      },
    ],
    pincode: 560001,
  },
  {
    name: "Kolkata",
    state: "West Bengal",
    lat: 22.5726,
    lng: 88.3639,
    stopPoints: [
      {
        stopId: 4001, // Unique Numeric ID
        title: "Howrah Station",
        directions: "Main Train Station",
        lat: 22.585,
        lng: 88.3468,
      },
      {
        stopId: 4002, // Unique Numeric ID
        title: "Esplanade",
        directions: "Near New Market",
        lat: 22.5674,
        lng: 88.3516,
      },
      {
        stopId: 4003, // Unique Numeric ID
        title: "Gariahat",
        directions: "Near Gariahat Market",
        lat: 22.519,
        lng: 88.3665,
      },
      {
        stopId: 4004, // Unique Numeric ID
        title: "Salt Lake City",
        directions: "Near City Center Mall",
        lat: 22.5868,
        lng: 88.4174,
      },
      {
        stopId: 4005, // Unique Numeric ID
        title: "Park Street",
        directions: "Near Park Street Metro",
        lat: 22.5546,
        lng: 88.3507,
      },
      {
        stopId: 4006, // Unique Numeric ID
        title: "Jadavpur",
        directions: "Near Jadavpur University",
        lat: 22.4996,
        lng: 88.3707,
      },
      {
        stopId: 4007, // Unique Numeric ID
        title: "Dumdum",
        directions: "Near Dumdum Station",
        lat: 22.6291,
        lng: 88.4197,
      },
      {
        stopId: 4008, // Unique Numeric ID
        title: "Sealdah",
        directions: "Sealdah Railway Station",
        lat: 22.5626,
        lng: 88.3773,
      },
    ],
    pincode: 700001,
  },
];

module.exports = cities;
