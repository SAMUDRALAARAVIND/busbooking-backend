const mongoose = require("mongoose");

// const cities = [
//   {
//     name: "Mumbai",
//     state: "Maharashtra",
//     lat: 19.076,
//     lng: 72.8777,
//     stopPoints: [
//       {
//         stopId: 1001, // Unique Numeric ID
//         title: "Mumbai Central",
//         directions: "Main Bus Station",
//         lat: 18.9716,
//         lng: 72.8194,
//       },
//       {
//         stopId: 1002, // Unique Numeric ID
//         title: "Andheri East",
//         directions: "Near Metro Station",
//         lat: 19.1136,
//         lng: 72.8697,
//       },
//       {
//         stopId: 1003, // Unique Numeric ID
//         title: "Bandra West",
//         directions: "Near Linking Road",
//         lat: 19.06,
//         lng: 72.83,
//       },
//       {
//         stopId: 1004, // Unique Numeric ID
//         title: "Dadar",
//         directions: "Near Dadar Station",
//         lat: 19.0183,
//         lng: 72.8446,
//       },
//       {
//         stopId: 1005, // Unique Numeric ID
//         title: "Thane",
//         directions: "Near Thane Station",
//         lat: 19.2183,
//         lng: 72.9781,
//       },
//       {
//         stopId: 1006, // Unique Numeric ID
//         title: "Navi Mumbai",
//         directions: "Near Vashi Station",
//         lat: 19.0771,
//         lng: 73.0128,
//       },
//       {
//         stopId: 1007, // Unique Numeric ID
//         title: "Borivali",
//         directions: "Near Borivali Station",
//         lat: 19.229,
//         lng: 72.8573,
//       },
//       {
//         stopId: 1008, // Unique Numeric ID
//         title: "Malad",
//         directions: "Near Malad West",
//         lat: 19.186,
//         lng: 72.8484,
//       },
//     ],
//     pincode: 400001,
//   },
//   {
//     name: "Delhi",
//     state: "Delhi",
//     lat: 28.6139,
//     lng: 77.209,
//     stopPoints: [
//       {
//         stopId: 2001, // Unique Numeric ID
//         title: "Kashmere Gate",
//         directions: "ISBT",
//         lat: 28.6676,
//         lng: 77.2265,
//       },
//       {
//         stopId: 2002, // Unique Numeric ID
//         title: "Rajiv Chowk",
//         directions: "Connaught Place",
//         lat: 28.6328,
//         lng: 77.2197,
//       },
//       {
//         stopId: 2003, // Unique Numeric ID
//         title: "Saket",
//         directions: "Near Select City Walk",
//         lat: 28.5273,
//         lng: 77.2191,
//       },
//       {
//         stopId: 2004, // Unique Numeric ID
//         title: "Hauz Khas",
//         directions: "Near Hauz Khas Village",
//         lat: 28.5494,
//         lng: 77.2017,
//       },
//       {
//         stopId: 2005, // Unique Numeric ID
//         title: "Dwarka Sector 21",
//         directions: "Metro Station",
//         lat: 28.5562,
//         lng: 77.0689,
//       },
//       {
//         stopId: 2006, // Unique Numeric ID
//         title: "Lajpat Nagar",
//         directions: "Near Central Market",
//         lat: 28.5677,
//         lng: 77.2433,
//       },
//       {
//         stopId: 2007, // Unique Numeric ID
//         title: "Nehru Place",
//         directions: "Near Metro Station",
//         lat: 28.55,
//         lng: 77.2517,
//       },
//       {
//         stopId: 2008, // Unique Numeric ID
//         title: "Anand Vihar",
//         directions: "ISBT",
//         lat: 28.6501,
//         lng: 77.315,
//       },
//     ],
//     pincode: 110001,
//   },
//   {
//     name: "Bengaluru",
//     state: "Karnataka",
//     lat: 12.9716,
//     lng: 77.5946,
//     stopPoints: [
//       {
//         stopId: 3001, // Unique Numeric ID
//         title: "Majestic",
//         directions: "Kempegowda Bus Station",
//         lat: 12.9778,
//         lng: 77.5713,
//       },
//       {
//         stopId: 3002, // Unique Numeric ID
//         title: "Electronic City",
//         directions: "Phase 1",
//         lat: 12.8391,
//         lng: 77.6774,
//       },
//       {
//         stopId: 3003, // Unique Numeric ID
//         title: "Whitefield",
//         directions: "Near ITPL",
//         lat: 12.9719,
//         lng: 77.7499,
//       },
//       {
//         stopId: 3004, // Unique Numeric ID
//         title: "Koramangala",
//         directions: "Near Forum Mall",
//         lat: 12.9352,
//         lng: 77.6245,
//       },
//       {
//         stopId: 3005, // Unique Numeric ID
//         title: "Indiranagar",
//         directions: "Near Metro Station",
//         lat: 12.9718,
//         lng: 77.6412,
//       },
//       {
//         stopId: 3006, // Unique Numeric ID
//         title: "Hebbal",
//         directions: "Hebbal Flyover",
//         lat: 13.0352,
//         lng: 77.5882,
//       },
//       {
//         stopId: 3007, // Unique Numeric ID
//         title: "Yeshwanthpur",
//         directions: "Near Yeshwanthpur Station",
//         lat: 13.0285,
//         lng: 77.5409,
//       },
//       {
//         stopId: 3008, // Unique Numeric ID
//         title: "Jayanagar",
//         directions: "Near Jayanagar 4th Block",
//         lat: 12.925,
//         lng: 77.5938,
//       },
//     ],
//     pincode: 560001,
//   },
//   {
//     name: "Kolkata",
//     state: "West Bengal",
//     lat: 22.5726,
//     lng: 88.3639,
//     stopPoints: [
//       {
//         stopId: 4001, // Unique Numeric ID
//         title: "Howrah Station",
//         directions: "Main Train Station",
//         lat: 22.585,
//         lng: 88.3468,
//       },
//       {
//         stopId: 4002, // Unique Numeric ID
//         title: "Esplanade",
//         directions: "Near New Market",
//         lat: 22.5674,
//         lng: 88.3516,
//       },
//       {
//         stopId: 4003, // Unique Numeric ID
//         title: "Gariahat",
//         directions: "Near Gariahat Market",
//         lat: 22.519,
//         lng: 88.3665,
//       },
//       {
//         stopId: 4004, // Unique Numeric ID
//         title: "Salt Lake City",
//         directions: "Near City Center Mall",
//         lat: 22.5868,
//         lng: 88.4174,
//       },
//       {
//         stopId: 4005, // Unique Numeric ID
//         title: "Park Street",
//         directions: "Near Park Street Metro",
//         lat: 22.5546,
//         lng: 88.3507,
//       },
//       {
//         stopId: 4006, // Unique Numeric ID
//         title: "Jadavpur",
//         directions: "Near Jadavpur University",
//         lat: 22.4996,
//         lng: 88.3707,
//       },
//       {
//         stopId: 4007, // Unique Numeric ID
//         title: "Dumdum",
//         directions: "Near Dumdum Station",
//         lat: 22.6291,
//         lng: 88.4197,
//       },
//       {
//         stopId: 4008, // Unique Numeric ID
//         title: "Sealdah",
//         directions: "Sealdah Railway Station",
//         lat: 22.5626,
//         lng: 88.3773,
//       },
//     ],
//     pincode: 700001,
//   },
//   {
//     name: "Chennai",
//     state: "Tamil Nadu",
//     lat: 13.0827,
//     lng: 80.2707,
//     stopPoints: [
//       {
//         stopId: 5001, // Unique Numeric ID
//         title: "Koyambedu",
//         directions: "CMBT Bus Station",
//         lat: 13.0695,
//         lng: 80.217,
//       },
//       {
//         stopId: 5002, // Unique Numeric ID
//         title: "Tambaram",
//         directions: "Near Railway Station",
//         lat: 12.925,
//         lng: 80.1275,
//       },
//       {
//         stopId: 5003, // Unique Numeric ID
//         title: "T Nagar",
//         directions: "Near Pondy Bazaar",
//         lat: 13.0427,
//         lng: 80.2339,
//       },
//       {
//         stopId: 5004, // Unique Numeric ID
//         title: "Guindy",
//         directions: "Near Guindy Metro",
//         lat: 13.0104,
//         lng: 80.2207,
//       },
//       {
//         stopId: 5005, // Unique Numeric ID
//         title: "Adyar",
//         directions: "Near Adyar Signal",
//         lat: 13.0067,
//         lng: 80.255,
//       },
//       {
//         stopId: 5006, // Unique Numeric ID
//         title: "Velachery",
//         directions: "Near Velachery Railway Station",
//         lat: 12.9766,
//         lng: 80.2211,
//       },
//       {
//         stopId: 5007, // Unique Numeric ID
//         title: "Anna Nagar",
//         directions: "Near Tower Park",
//         lat: 13.0878,
//         lng: 80.2206,
//       },
//       {
//         stopId: 5008, // Unique Numeric ID
//         title: "Besant Nagar",
//         directions: "Near Beach Road",
//         lat: 13.0017,
//         lng: 80.2663,
//       }
//     ],
//     pincode: 600001
//   },
//   {
//     name: "Hyderabad",
//     state: "Telangana",
//     lat: 17.385,
//     lng: 78.4867,
//     stopPoints: [
//       {
//         stopId: 6001, // Unique Numeric ID
//         title: "Miyapur",
//         directions: "Metro Station",
//         lat: 17.4931,
//         lng: 78.3905,
//       },
//       {
//         stopId: 6002, // Unique Numeric ID
//         title: "Kukatpally",
//         directions: "Near Forum Mall",
//         lat: 17.4949,
//         lng: 78.3995,
//       },
//       {
//         stopId: 6003, // Unique Numeric ID
//         title: "Secunderabad",
//         directions: "Near Secunderabad Railway Station",
//         lat: 17.4399,
//         lng: 78.4983,
//       },
//       {
//         stopId: 6004, // Unique Numeric ID
//         title: "Hitech City",
//         directions: "Near Cyber Towers",
//         lat: 17.4483,
//         lng: 78.3819,
//       },
//       {
//         stopId: 6005, // Unique Numeric ID
//         title: "Charminar",
//         directions: "Near Charminar",
//         lat: 17.3616,
//         lng: 78.4747,
//       },
//       {
//         stopId: 6006, // Unique Numeric ID
//         title: "Mehdipatnam",
//         directions: "Near Sarojini Devi Eye Hospital",
//         lat: 17.3921,
//         lng: 78.4405,
//       },
//       {
//         stopId: 6007, // Unique Numeric ID
//         title: "Begumpet",
//         directions: "Near Begumpet Metro Station",
//         lat: 17.4465,
//         lng: 78.4621,
//       },
//       {
//         stopId: 6008, // Unique Numeric ID
//         title: "Gachibowli",
//         directions: "Near Gachibowli Stadium",
//         lat: 17.4399,
//         lng: 78.3538,
//       }
//     ],
//     pincode: 500001
//   },
//   {
//     name: "Pune",
//     state: "Maharashtra",
//     lat: 18.5204,
//     lng: 73.8567,
//     stopPoints: [
//       {
//         stopId: 7001, // Unique Numeric ID
//         title: "Shivajinagar",
//         directions: "Near Shivajinagar Bus Stand",
//         lat: 18.5301,
//         lng: 73.8525,
//       },
//       {
//         stopId: 7002, // Unique Numeric ID
//         title: "Hinjewadi",
//         directions: "Near IT Park",
//         lat: 18.5975,
//         lng: 73.7187,
//       },
//       {
//         stopId: 7003, // Unique Numeric ID
//         title: "Swargate",
//         directions: "Near Swargate Bus Stand",
//         lat: 18.5016,
//         lng: 73.8619,
//       },
//       {
//         stopId: 7004, // Unique Numeric ID
//         title: "Kothrud",
//         directions: "Near Kothrud Bus Stand",
//         lat: 18.5074,
//         lng: 73.8077,
//       },
//       {
//         stopId: 7005, // Unique Numeric ID
//         title: "Baner",
//         directions: "Near Baner Road",
//         lat: 18.5582,
//         lng: 73.7895,
//       },
//       {
//         stopId: 7006, // Unique Numeric ID
//         title: "Viman Nagar",
//         directions: "Near Phoenix Mall",
//         lat: 18.5678,
//         lng: 73.9113,
//       },
//       {
//         stopId: 7007, // Unique Numeric ID
//         title: "Aundh",
//         directions: "Near Parihar Chowk",
//         lat: 18.5612,
//         lng: 73.8077,
//       },
//       {
//         stopId: 7008, // Unique Numeric ID
//         title: "Pimpri",
//         directions: "Near Pimpri Chowk",
//         lat: 18.6285,
//         lng: 73.7997,
//       }
//     ],
//     pincode: 411001
//   },
//   {
//     name: "Ahmedabad",
//     state: "Gujarat",
//     lat: 23.0225,
//     lng: 72.5714,
//     stopPoints: [
//       {
//         stopId: 8001, // Unique Numeric ID
//         title: "Lal Darwaza",
//         directions: "Near Bus Station",
//         lat: 23.0258,
//         lng: 72.5807,
//       },
//       {
//         stopId: 8002, // Unique Numeric ID
//         title: "Satellite",
//         directions: "Near Iscon Circle",
//         lat: 23.0207,
//         lng: 72.5087,
//       },
//       {
//         stopId: 8003, // Unique Numeric ID
//         title: "Maninagar",
//         directions: "Near Railway Station",
//         lat: 23.0061,
//         lng: 72.5991,
//       },
//       {
//         stopId: 8004, // Unique Numeric ID
//         title: "Navrangpura",
//         directions: "Near Navrangpura Bus Stand",
//         lat: 23.0334,
//         lng: 72.5617,
//       },
//       {
//         stopId: 8005, // Unique Numeric ID
//         title: "SG Highway",
//         directions: "Near SG Highway",
//         lat: 23.0432,
//         lng: 72.5301,
//       },
//       {
//         stopId: 8006, // Unique Numeric ID
//         title: "Bopal",
//         directions: "Near Bopal Cross Road",
//         lat: 23.0225,
//         lng: 72.4661,
//       },
//       {
//         stopId: 8007, // Unique Numeric ID
//         title: "Ashram Road",
//         directions: "Near Income Tax Office",
//         lat: 23.0475,
//         lng: 72.5807,
//       },
//       {
//         stopId: 8008, // Unique Numeric ID
//         title: "Kalupur",
//         directions: "Near Kalupur Railway Station",
//         lat: 23.0222,
//         lng: 72.6025,
//       }
//     ],
//     pincode: 380001
//   }

// ];

const cities = [
  {
    name: "Mumbai",
    state: "Maharashtra",
    lat: 19.076,
    lng: 72.8777,
    stopPoints: [
      {
        stopId: 1001,
        title:
          "Mumbai Central Bus Terminal - Boarding Zone - IntrCity Boarding Zone, MS Complex, Hotel New Golden Pride Lodge, NH 48, Anand Nagar",
        directions:
          "IntrCity Boarding Zone at MS Complex, near Hotel New Golden Pride Lodge, located on NH 48, adjacent to Anand Nagar, Mumbai Central. Close proximity to the railway station for convenient transfers.",
        lat: 18.9716,
        lng: 72.8194,
      },
      {
        stopId: 1002,
        title:
          "Andheri East Metro & Bus Stop - Boarding Zone - Next to Andheri Metro Station, opposite Western Express Highway, ideal for IT commuters",
        directions:
          "Boarding Zone near Andheri Metro Station, situated next to the Western Express Highway, opposite the popular IT hubs. Convenient for daily commuters and easy access to nearby business districts.",
        lat: 19.1136,
        lng: 72.8697,
      },
      {
        stopId: 1003,
        title:
          "Bandra West Bus Depot - Boarding Zone - Linking Road, near Elco Market, accessible for shopping and dining areas",
        directions:
          "Located on Linking Road, near the popular Elco Market. Ideal boarding zone for travelers exploring the shopping and dining attractions of Bandra West. Close to bus depot for local travel.",
        lat: 19.06,
        lng: 72.83,
      },
      {
        stopId: 1004,
        title:
          "Dadar Station Bus Hub - Boarding Zone - Near Dadar Railway Station, connectivity to Central and Western Lines",
        directions:
          "Boarding zone near Dadar Railway Station, offering easy connectivity to both Central and Western Lines. Close to local markets, making it a prime spot for travelers starting their journey.",
        lat: 19.0183,
        lng: 72.8446,
      },
      {
        stopId: 1005,
        title:
          "Thane Central Bus Stop - Boarding Zone - Near Thane Railway Station, close to local markets and Viviana Mall",
        directions:
          "Boarding Zone located near Thane Railway Station, providing easy access to Viviana Mall and local markets. Ideal for travelers looking to shop before boarding the bus.",
        lat: 19.2183,
        lng: 72.9781,
      },
      {
        stopId: 1006,
        title:
          "Navi Mumbai Vashi Bus Terminal - Boarding Zone - Near Vashi Railway Station, connectivity to business district and malls",
        directions:
          "Convenient boarding zone at Vashi Railway Station, providing access to the business district and nearby malls. Suitable for travelers heading to corporate offices in Navi Mumbai.",
        lat: 19.0771,
        lng: 73.0128,
      },
      {
        stopId: 1007,
        title:
          "Borivali West Bus Stop - Boarding Zone - Near Borivali Railway Station, access to Gorai Beach and EsselWorld",
        directions:
          "Boarding zone near Borivali Railway Station, offering quick access to Gorai Beach and EsselWorld amusement park. Ideal for travelers looking for recreational activities before boarding.",
        lat: 19.229,
        lng: 72.8573,
      },
      {
        stopId: 1008,
        title:
          "Malad West Shopping District Bus Stop - Boarding Zone - Near Inorbit Mall, connected to local residential areas",
        directions:
          "Located near Inorbit Mall in Malad West, this boarding zone is perfect for residents of the area and shoppers looking to travel after a visit to the mall. Close to public transport options.",
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
        stopId: 2001,
        title:
          "Kashmere Gate ISBT & Metro Station - Boarding Zone - Major Interstate Bus Terminal, connectivity to Red and Yellow Lines",
        directions:
          "IntrCity Boarding Zone located at the Kashmere Gate ISBT, with access to the Red and Yellow Metro Lines. Close to historical landmarks and well-connected for travelers across NCR.",
        lat: 28.6676,
        lng: 77.2265,
      },
      {
        stopId: 2002,
        title:
          "Rajiv Chowk, Connaught Place Bus Terminal - Boarding Zone - Prime location in the heart of Delhi, near popular shopping and dining spots",
        directions:
          "Boarding Zone at Rajiv Chowk, Connaught Place, known for its central location and proximity to shopping and dining options. Ideal for travelers looking to explore Delhi's central business district.",
        lat: 28.6328,
        lng: 77.2197,
      },
      {
        stopId: 2003,
        title:
          "Saket District Centre Bus Stop - Boarding Zone - Near Select Citywalk Mall, accessible to southern neighborhoods",
        directions:
          "Located near Select Citywalk Mall, this boarding zone offers easy access to the Saket District Centre and nearby neighborhoods. Suitable for shoppers and residents traveling to other parts of the city.",
        lat: 28.5273,
        lng: 77.2191,
      },
      {
        stopId: 2004,
        title:
          "Hauz Khas Village Bus Stop - Boarding Zone - Near Hauz Khas Village, perfect for art and cafe enthusiasts",
        directions:
          "Boarding Zone near Hauz Khas Village, a hub for art galleries and cafes. Popular among young travelers and those looking to explore the cultural scene before their journey.",
        lat: 28.5494,
        lng: 77.2017,
      },
      {
        stopId: 2005,
        title:
          "Dwarka Sector 21 Metro & Bus Station - Boarding Zone - End of Blue Line Metro, connectivity to IGI Airport",
        directions:
          "Boarding zone at Dwarka Sector 21, located at the end of the Blue Line Metro, offering seamless connectivity to Indira Gandhi International Airport. Convenient for international travelers.",
        lat: 28.5562,
        lng: 77.0689,
      },
      {
        stopId: 2006,
        title:
          "Lajpat Nagar Central Market Bus Stop - Boarding Zone - Near Lajpat Nagar Metro, popular for street food and shopping",
        directions:
          "Boarding Zone near Lajpat Nagar Metro, offering access to the Central Market known for its vibrant street food and shopping scene. Ideal for travelers who want to explore the local culture.",
        lat: 28.5677,
        lng: 77.2433,
      },
      {
        stopId: 2007,
        title:
          "Nehru Place Business District Bus Stop - Boarding Zone - Adjacent to Nehru Place Metro, tech hub and commercial area",
        directions:
          "Boarding Zone near Nehru Place Metro, adjacent to the business district known for its IT offices and electronics market. Ideal for professionals commuting to and from the area.",
        lat: 28.55,
        lng: 77.2517,
      },
      {
        stopId: 2008,
        title:
          "Anand Vihar ISBT & Metro Station - Boarding Zone - Major bus terminal and metro station, connecting NCR and Ghaziabad",
        directions:
          "Located at Anand Vihar ISBT, this boarding zone provides easy access to the metro and bus terminal. Ideal for travelers commuting between Delhi, NCR, and Ghaziabad.",
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
        stopId: 3001,
        title:
          "Majestic Kempegowda Bus Station - Boarding Zone - Central bus hub, near Bengaluru City Railway Station",
        directions:
          "IntrCity Boarding Zone at Majestic Kempegowda Bus Station, located near the Bengaluru City Railway Station. Convenient for travelers heading to different parts of the city and intercity destinations.",
        lat: 12.9778,
        lng: 77.5713,
      },
      {
        stopId: 3002,
        title:
          "Electronic City Phase 1 Bus Stop - Boarding Zone - IT hub of Bengaluru, near tech parks and corporate offices",
        directions:
          "Boarding zone located in Electronic City Phase 1, near major tech parks and corporate offices. Ideal for IT professionals commuting to and from the area. Access to business hotels and eateries.",
        lat: 12.8391,
        lng: 77.6774,
      },
      {
        stopId: 3003,
        title:
          "Whitefield IT Hub Bus Terminal - Boarding Zone - Near ITPL and corporate offices, accessible for tech commuters",
        directions:
          "Located near ITPL in Whitefield, this boarding zone is perfect for tech professionals and employees working in the area. Close to corporate offices and business parks.",
        lat: 12.9719,
        lng: 77.7499,
      },
      {
        stopId: 3004,
        title:
          "Hebbal Flyover Bus Stop - Boarding Zone - Key point on the ORR, connectivity to airport and city center",
        directions:
          "Boarding zone near Hebbal Flyover, offering connectivity to the Outer Ring Road and the airport. Ideal for travelers heading to the northern suburbs and the city center.",
        lat: 13.035,
        lng: 77.585,
      },
      {
        stopId: 3005,
        title:
          "Koramangala 6th Block Bus Stop - Boarding Zone - Near Forum Mall, popular for nightlife and dining",
        directions:
          "Located near Forum Mall, this boarding zone is ideal for travelers exploring the vibrant nightlife and dining options in Koramangala. Access to shopping centers and coworking spaces.",
        lat: 12.9365,
        lng: 77.6134,
      },
      {
        stopId: 3006,
        title:
          "Marathahalli Bridge Bus Stop - Boarding Zone - Near Marathahalli Bridge, connectivity to IT corridors and malls",
        directions:
          "Boarding Zone at Marathahalli Bridge, connecting to IT corridors and nearby shopping malls. Ideal for professionals and shoppers looking for easy access to both work and leisure destinations.",
        lat: 12.9592,
        lng: 77.701,
      },
      {
        stopId: 3007,
        title:
          "Jayanagar 4th Block Bus Stop - Boarding Zone - Close to Jayanagar shopping complex and residential areas",
        directions:
          "Boarding Zone at Jayanagar 4th Block, near the popular shopping complex and residential neighborhoods. Convenient for travelers commuting from the southern parts of the city.",
        lat: 12.925,
        lng: 77.5912,
      },
      {
        stopId: 3008,
        title:
          "Mysore Road Satellite Bus Station - Boarding Zone - Major terminal for outbound journeys, near NICE Road",
        directions:
          "Located near NICE Road, this boarding zone at Mysore Road Satellite Bus Station is ideal for travelers heading out of Bengaluru. Close to highway access and connecting points for long-distance travel.",
        lat: 12.95,
        lng: 77.5326,
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
        stopId: 4001,
        title:
          "Esplanade Bus Terminus - Boarding Zone - Central Kolkata, near Chowringhee Road and Indian Museum",
        directions:
          "IntrCity Boarding Zone located at Esplanade Bus Terminus, close to Chowringhee Road and the Indian Museum. Central location provides easy access to major attractions and transport hubs.",
        lat: 22.5645,
        lng: 88.3433,
      },
      {
        stopId: 4002,
        title:
          "Salt Lake Sector V Bus Stop - Boarding Zone - IT hub of Kolkata, near corporate offices and tech parks",
        directions:
          "Boarding Zone situated in Salt Lake Sector V, the IT hub of Kolkata. Close to major corporate offices and tech parks, making it ideal for IT professionals commuting to and from the area.",
        lat: 22.5721,
        lng: 88.4335,
      },
      {
        stopId: 4003,
        title:
          "Howrah Station Bus Terminal - Boarding Zone - Adjacent to Howrah Railway Station, connectivity to all parts of the city",
        directions:
          "Boarding Zone at Howrah Station Bus Terminal, providing connectivity to all parts of the city. Ideal for travelers arriving by train and looking to continue their journey by bus.",
        lat: 22.585,
        lng: 88.3464,
      },
      {
        stopId: 4004,
        title:
          "Garia Bus Stand - Boarding Zone - Near Garia Metro Station, access to southern suburbs and Gariahat Market",
        directions:
          "Boarding Zone located at Garia Bus Stand, near Garia Metro Station. Provides access to the southern suburbs and the popular Gariahat Market. Ideal for local commuters and shoppers.",
        lat: 22.4622,
        lng: 88.3993,
      },
      {
        stopId: 4005,
        title:
          "Jadavpur 8B Bus Stand - Boarding Zone - Near Jadavpur University and local shopping areas",
        directions:
          "Boarding Zone near Jadavpur 8B Bus Stand, close to Jadavpur University and local shopping areas. Convenient for students and residents traveling to other parts of Kolkata.",
        lat: 22.5005,
        lng: 88.3697,
      },
      {
        stopId: 4006,
        title:
          "Airport Gate No. 1 Bus Stop - Boarding Zone - Near Netaji Subhas Chandra Bose International Airport",
        directions:
          "Boarding Zone located near Airport Gate No. 1, close to Netaji Subhas Chandra Bose International Airport. Perfect for travelers catching flights or arriving in Kolkata by air.",
        lat: 22.6471,
        lng: 88.4441,
      },
      {
        stopId: 4007,
        title:
          "New Town Bus Terminus - Boarding Zone - Near Eco Park and Axis Mall, connectivity to IT and residential areas",
        directions:
          "Boarding Zone at New Town Bus Terminus, near Eco Park and Axis Mall. Offers connectivity to IT hubs and residential areas. Ideal for both professionals and residents commuting to central Kolkata.",
        lat: 22.5814,
        lng: 88.4814,
      },
      {
        stopId: 4008,
        title:
          "Barasat Colony More Bus Stop - Boarding Zone - Major suburban bus stop, connectivity to North Kolkata",
        directions:
          "Boarding Zone at Barasat Colony More, a major suburban bus stop connecting North Kolkata to other regions. Suitable for travelers commuting to and from the northern suburbs.",
        lat: 22.7278,
        lng: 88.4747,
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
        stopId: 5001,
        title:
          "Koyambedu CMBT - Boarding Zone - Central bus terminal, connectivity to all parts of Tamil Nadu and beyond",
        directions:
          "IntrCity Boarding Zone at Koyambedu CMBT, one of the largest bus terminals in South India. Provides easy access to local and intercity buses connecting Tamil Nadu and neighboring states.",
        lat: 13.0674,
        lng: 80.2112,
      },
      {
        stopId: 5002,
        title:
          "Tambaram Bus Stand - Boarding Zone - Gateway to southern suburbs, near Tambaram Railway Station",
        directions:
          "Boarding Zone at Tambaram Bus Stand, located near Tambaram Railway Station. Gateway to the southern suburbs of Chennai, providing connectivity to various residential and commercial areas.",
        lat: 12.9226,
        lng: 80.1274,
      },
      {
        stopId: 5003,
        title:
          "T Nagar Bus Terminus - Boarding Zone - Heart of shopping district, near Pondy Bazaar and Usman Road",
        directions:
          "Boarding Zone at T Nagar Bus Terminus, situated in the heart of Chennai’s shopping district. Close to Pondy Bazaar and Usman Road, making it an ideal stop for shoppers and tourists.",
        lat: 13.0404,
        lng: 80.2337,
      },
      {
        stopId: 5004,
        title:
          "Velachery Bus Stand - Boarding Zone - Near Velachery Railway Station, connectivity to IT corridor and OMR",
        directions:
          "Boarding Zone at Velachery Bus Stand, located near Velachery Railway Station. Provides connectivity to the IT corridor and Old Mahabalipuram Road (OMR). Ideal for tech professionals and local commuters.",
        lat: 12.9757,
        lng: 80.2215,
      },
      {
        stopId: 5005,
        title:
          "Adyar Bus Stand - Boarding Zone - Near Adyar Depot, access to educational institutions and residential areas",
        directions:
          "Boarding Zone at Adyar Bus Stand, close to Adyar Depot. Offers access to prominent educational institutions and residential neighborhoods. Suitable for students and residents commuting to other parts of Chennai.",
        lat: 13.0068,
        lng: 80.2567,
      },
      {
        stopId: 5006,
        title:
          "Egmore Bus Stand - Boarding Zone - Near Egmore Railway Station, connectivity to central business district",
        directions:
          "Boarding Zone at Egmore Bus Stand, located near Egmore Railway Station. Provides easy access to the central business district and nearby commercial areas. Ideal for business travelers.",
        lat: 13.0784,
        lng: 80.2625,
      },
      {
        stopId: 5007,
        title:
          "Sholinganallur Bus Stop - Boarding Zone - Major stop on OMR, connectivity to IT parks and residential complexes",
        directions:
          "Boarding Zone at Sholinganallur Bus Stop, located on Old Mahabalipuram Road (OMR). Close to major IT parks and residential complexes. Ideal for tech professionals and residents commuting to central Chennai.",
        lat: 12.8985,
        lng: 80.2261,
      },
      {
        stopId: 5008,
        title:
          "Thiruvanmiyur Bus Depot - Boarding Zone - Near Thiruvanmiyur Beach and MRTS Station, connectivity to ECR",
        directions:
          "Boarding Zone at Thiruvanmiyur Bus Depot, located near Thiruvanmiyur Beach and MRTS Station. Provides connectivity to the East Coast Road (ECR) and surrounding beach areas. Ideal for leisure travelers.",
        lat: 12.9798,
        lng: 80.2603,
      },
    ],
    pincode: 600001,
  },
];

module.exports = cities;
