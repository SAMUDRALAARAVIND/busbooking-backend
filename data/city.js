const mongoose = require("mongoose");

const cities = [
  {
    name: "Mumbai",
    state: "Maharashtra",
    lat: 19.076,
    lng: 72.8777,
    stopPoints: [
      {
        stopId: 1001,
        title: "Mumbai Central",
        directions: "Main Bus Station",
        lat: 18.9716,
        lng: 72.8194,
      },
      {
        stopId: 1002,
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
  {
    name: "Chennai",
    state: "Tamil Nadu",
    lat: 13.0827,
    lng: 80.2707,
    stopPoints: [
      {
        stopId: 5001, // Unique Numeric ID
        title: "Koyambedu",
        directions: "CMBT Bus Station",
        lat: 13.0695,
        lng: 80.217,
      },
      {
        stopId: 5002, // Unique Numeric ID
        title: "Tambaram",
        directions: "Near Railway Station",
        lat: 12.925,
        lng: 80.1275,
      },
      {
        stopId: 5003, // Unique Numeric ID
        title: "T Nagar",
        directions: "Near Pondy Bazaar",
        lat: 13.0427,
        lng: 80.2339,
      },
      {
        stopId: 5004, // Unique Numeric ID
        title: "Guindy",
        directions: "Near Guindy Metro",
        lat: 13.0104,
        lng: 80.2207,
      },
      {
        stopId: 5005, // Unique Numeric ID
        title: "Adyar",
        directions: "Near Adyar Signal",
        lat: 13.0067,
        lng: 80.255,
      },
      {
        stopId: 5006, // Unique Numeric ID
        title: "Velachery",
        directions: "Near Velachery Railway Station",
        lat: 12.9766,
        lng: 80.2211,
      },
      {
        stopId: 5007, // Unique Numeric ID
        title: "Anna Nagar",
        directions: "Near Tower Park",
        lat: 13.0878,
        lng: 80.2206,
      },
      {
        stopId: 5008, // Unique Numeric ID
        title: "Besant Nagar",
        directions: "Near Beach Road",
        lat: 13.0017,
        lng: 80.2663,
      },
    ],
    pincode: 600001,
  },
  {
    name: "Hyderabad",
    state: "Telangana",
    lat: 17.385,
    lng: 78.4867,
    stopPoints: [
      {
        stopId: 6001, // Unique Numeric ID
        title: "Miyapur",
        directions: "Metro Station",
        lat: 17.4931,
        lng: 78.3905,
      },
      {
        stopId: 6002, // Unique Numeric ID
        title: "Kukatpally",
        directions: "Near Forum Mall",
        lat: 17.4949,
        lng: 78.3995,
      },
      {
        stopId: 6003, // Unique Numeric ID
        title: "Secunderabad",
        directions: "Near Secunderabad Railway Station",
        lat: 17.4399,
        lng: 78.4983,
      },
      {
        stopId: 6004, // Unique Numeric ID
        title: "Hitech City",
        directions: "Near Cyber Towers",
        lat: 17.4483,
        lng: 78.3819,
      },
      {
        stopId: 6005, // Unique Numeric ID
        title: "Charminar",
        directions: "Near Charminar",
        lat: 17.3616,
        lng: 78.4747,
      },
      {
        stopId: 6006, // Unique Numeric ID
        title: "Mehdipatnam",
        directions: "Near Sarojini Devi Eye Hospital",
        lat: 17.3921,
        lng: 78.4405,
      },
      {
        stopId: 6007, // Unique Numeric ID
        title: "Begumpet",
        directions: "Near Begumpet Metro Station",
        lat: 17.4465,
        lng: 78.4621,
      },
      {
        stopId: 6008, // Unique Numeric ID
        title: "Gachibowli",
        directions: "Near Gachibowli Stadium",
        lat: 17.4399,
        lng: 78.3538,
      },
    ],
    pincode: 500001,
  },
  {
    name: "Pune",
    state: "Maharashtra",
    lat: 18.5204,
    lng: 73.8567,
    stopPoints: [
      {
        stopId: 7001, // Unique Numeric ID
        title: "Shivajinagar",
        directions: "Near Shivajinagar Bus Stand",
        lat: 18.5301,
        lng: 73.8525,
      },
      {
        stopId: 7002, // Unique Numeric ID
        title: "Hinjewadi",
        directions: "Near IT Park",
        lat: 18.5975,
        lng: 73.7187,
      },
      {
        stopId: 7003, // Unique Numeric ID
        title: "Swargate",
        directions: "Near Swargate Bus Stand",
        lat: 18.5016,
        lng: 73.8619,
      },
      {
        stopId: 7004, // Unique Numeric ID
        title: "Kothrud",
        directions: "Near Kothrud Bus Stand",
        lat: 18.5074,
        lng: 73.8077,
      },
      {
        stopId: 7005, // Unique Numeric ID
        title: "Baner",
        directions: "Near Baner Road",
        lat: 18.5582,
        lng: 73.7895,
      },
      {
        stopId: 7006, // Unique Numeric ID
        title: "Viman Nagar",
        directions: "Near Phoenix Mall",
        lat: 18.5678,
        lng: 73.9113,
      },
      {
        stopId: 7007, // Unique Numeric ID
        title: "Aundh",
        directions: "Near Parihar Chowk",
        lat: 18.5612,
        lng: 73.8077,
      },
      {
        stopId: 7008, // Unique Numeric ID
        title: "Pimpri",
        directions: "Near Pimpri Chowk",
        lat: 18.6285,
        lng: 73.7997,
      },
    ],
    pincode: 411001,
  },
  {
    name: "Ahmedabad",
    state: "Gujarat",
    lat: 23.0225,
    lng: 72.5714,
    stopPoints: [
      {
        stopId: 8001, // Unique Numeric ID
        title: "Lal Darwaza",
        directions: "Near Bus Station",
        lat: 23.0258,
        lng: 72.5807,
      },
      {
        stopId: 8002, // Unique Numeric ID
        title: "Satellite",
        directions: "Near Iscon Circle",
        lat: 23.0207,
        lng: 72.5087,
      },
      {
        stopId: 8003, // Unique Numeric ID
        title: "Maninagar",
        directions: "Near Railway Station",
        lat: 23.0061,
        lng: 72.5991,
      },
      {
        stopId: 8004, // Unique Numeric ID
        title: "Navrangpura",
        directions: "Near Navrangpura Bus Stand",
        lat: 23.0334,
        lng: 72.5617,
      },
      {
        stopId: 8005, // Unique Numeric ID
        title: "SG Highway",
        directions: "Near SG Highway",
        lat: 23.0432,
        lng: 72.5301,
      },
      {
        stopId: 8006, // Unique Numeric ID
        title: "Bopal",
        directions: "Near Bopal Cross Road",
        lat: 23.0225,
        lng: 72.4661,
      },
      {
        stopId: 8007, // Unique Numeric ID
        title: "Ashram Road",
        directions: "Near Income Tax Office",
        lat: 23.0475,
        lng: 72.5807,
      },
      {
        stopId: 8008, // Unique Numeric ID
        title: "Kalupur",
        directions: "Near Kalupur Railway Station",
        lat: 23.0222,
        lng: 72.6025,
      },
    ],
    pincode: 380001,
  },
];

module.exports = cities;
