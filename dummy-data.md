// data used for checking the workings

1- City data

```javascript
// data for 2 cities only
const cityData: [
        {
            "name": "Bangalore",
            "state": "Karnataka",
            "lat": 12.9716,
            "lng": 77.5946,
            "stopPoints": [
                {
                    "stopId": 1,
                    "title": "Majestic Bus Station",
                    "directions": "Near Kempegowda Metro Station, Platform 2",
                    "lat": 12.9763,
                    "lng": 77.5713,

                },
                {
                    "stopId": 2,
                    "title": "Silk Board Junction",
                    "directions": "Opposite BTM Layout, Under the flyover",
                    "lat": 12.9172,
                    "lng": 77.6239,

                },
                {
                    "stopId": 3,
                    "title": "Electronic City Phase 1",
                    "directions": "Beside Infosys Gate 1",
                    "lat": 12.8415,
                    "lng": 77.6636,

                },
                {
                    "stopId": 4,
                    "title": "Hebbal",
                    "directions": "Near Hebbal Flyover, Service Road",
                    "lat": 13.0358,
                    "lng": 77.597,

                },
                {
                    "stopId": 5,
                    "title": "Whitefield",
                    "directions": "Near ITPL Main Road, Opposite Big Bazaar",
                    "lat": 12.9698,
                    "lng": 77.7499,

                },
                {
                    "stopId": 6,
                    "title": "Koramangala Forum Mall",
                    "directions": "In front of Forum Mall, Hosur Road",
                    "lat": 12.9345,
                    "lng": 77.6115,

                },
                {
                    "stopId": 7,
                    "title": "M.G. Road",
                    "directions": "Near Metro Station, Opposite Cauvery Emporium",
                    "lat": 12.9719,
                    "lng": 77.5996,

                },
                {
                    "stopId": 8,
                    "title": "Yeshwanthpur Railway Station",
                    "directions": "Near Entrance Gate, Tumkur Road",
                    "lat": 13.0292,
                    "lng": 77.5409,

                }
            ],
            "pinCode": 560001,

        },
        {

            "name": "Chennai",
            "state": "Tamil Nadu",
            "lat": 13.0827,
            "lng": 80.2707,
            "stopPoints": [
                {
                    "stopId": 9,
                    "title": "CMBT (Chennai Mofussil Bus Terminus)",
                    "directions": "Near Koyambedu Metro Station, Platform 3",
                    "lat": 13.0695,
                    "lng": 80.2179,

                },
                {
                    "stopId": 10,
                    "title": "Guindy Bus Stop",
                    "directions": "Near Guindy Railway Station, Anna Salai",
                    "lat": 13.0067,
                    "lng": 80.2206,

                },
                {
                    "stopId": 11,
                    "title": "T. Nagar Bus Depot",
                    "directions": "Near T. Nagar Bus Depot, Usman Road",
                    "lat": 13.0406,
                    "lng": 80.2337,

                },
                {
                    "stopId": 12,
                    "title": "Adyar Bus Depot",
                    "directions": "Near Adyar Signal, Sardar Patel Road",
                    "lat": 13.0068,
                    "lng": 80.2577,

                },
                {
                    "stopId": 13,
                    "title": "Velachery Bus Stop",
                    "directions": "Opposite Phoenix Marketcity Mall, Velachery Main Road",
                    "lat": 12.9822,
                    "lng": 80.2209,

                },
                {
                    "stopId": 14,
                    "title": "Egmore Bus Stop",
                    "directions": "Near Egmore Railway Station, Gandhi Irwin Road",
                    "lat": 13.0773,
                    "lng": 80.2607,

                },
                {
                    "stopId": 15,
                    "title": "Tambaram Bus Stand",
                    "directions": "Near Tambaram Railway Station, GST Road",
                    "lat": 12.9245,
                    "lng": 80.1024,

                },
                {
                    "stopId": 16,
                    "title": "Tiruvanmiyur Bus Depot",
                    "directions": "Near Tiruvanmiyur Signal, East Coast Road",
                    "lat": 12.9793,
                    "lng": 80.2601,

                }
            ],
            "pinCode": 600001,

        }
    ],



```

2- Bus data

```javascript
// data of 2 bus
const busData =  [
        {
            "layout": {
                "upperDeck": [
                    {
                        "seatNumber": "U1",
                        "row": 1,
                        "column": 1,
                        "type": "SLEEPER",

                    },
                    {
                        "seatNumber": "U2",
                        "row": 1,
                        "column": 2,
                        "type": "SLEEPER",

                    },
                    {
                        "seatNumber": "U3",
                        "row": 2,
                        "column": 1,
                        "type": "SLEEPER",

                    },
                    {
                        "seatNumber": "U4",
                        "row": 2,
                        "column": 2,
                        "type": "SLEEPER",

                    },
                    {
                        "seatNumber": "U5",
                        "row": 3,
                        "column": 1,
                        "type": "SLEEPER",

                    },
                    {
                        "seatNumber": "U6",
                        "row": 3,
                        "column": 2,
                        "type": "SLEEPER",

                    },
                    {
                        "seatNumber": "U7",
                        "row": 4,
                        "column": 1,
                        "type": "SLEEPER",

                    },
                    {
                        "seatNumber": "U8",
                        "row": 4,
                        "column": 2,
                        "type": "SLEEPER",

                    }
                ],
                "lowerDeck": [
                    {
                        "seatNumber": "L1",
                        "row": 1,
                        "column": 1,
                        "type": "SEATER",

                    },
                    {
                        "seatNumber": "L2",
                        "row": 1,
                        "column": 2,
                        "type": "SEATER",

                    },
                    {
                        "seatNumber": "L3",
                        "row": 2,
                        "column": 1,
                        "type": "SEATER",

                    },
                    {
                        "seatNumber": "L4",
                        "row": 2,
                        "column": 2,
                        "type": "SEATER",

                    },
                    {
                        "seatNumber": "L5",
                        "row": 3,
                        "column": 1,
                        "type": "SEATER",

                    },
                    {
                        "seatNumber": "L6",
                        "row": 3,
                        "column": 2,
                        "type": "SEATER",

                    },
                    {
                        "seatNumber": "L7",
                        "row": 4,
                        "column": 1,
                        "type": "SEATER",

                    },
                    {
                        "seatNumber": "L8",
                        "row": 4,
                        "column": 2,
                        "type": "SEATER",

                    },
                    {
                        "seatNumber": "L9",
                        "row": 5,
                        "column": 1,
                        "type": "SEATER",

                    },
                    {
                        "seatNumber": "L10",
                        "row": 5,
                        "column": 2,
                        "type": "SEATER",

                    }
                ]
            },
            "_id": "66ce09fa4dadab228108d353",
            "busPartner": "KSRTC",
            "busType": "AC",
            "amenities": [
                "WIFI",
                "CHARGING_PORT",
                "EMERGENCY_EXIT"
            ],
            "busNumber": "KA01AB1234",

        },
        {
            "layout": {
                "upperDeck": [
                    {
                        "seatNumber": "U1",
                        "row": 1,
                        "column": 1,
                        "type": "SLEEPER",

                    },
                    {
                        "seatNumber": "U2",
                        "row": 1,
                        "column": 2,
                        "type": "SLEEPER",

                    }
                ],
                "lowerDeck": [
                    {
                        "seatNumber": "L1",
                        "row": 1,
                        "column": 1,
                        "type": "SEATER",

                    },
                    {
                        "seatNumber": "L2",
                        "row": 1,
                        "column": 2,
                        "type": "SEATER",

                    },
                    {
                        "seatNumber": "L3",
                        "row": 2,
                        "column": 1,
                        "type": "SLEEPER",

                    },
                    {
                        "seatNumber": "L4",
                        "row": 2,
                        "column": 2,
                        "type": "SLEEPER",

                    }
                ]
            },
            "_id": "66ceb0596df612208a51144b",
            "busPartner": "GreenLine Travels",
            "busType": "AC",
            "amenities": [
                "WIFI",
                "CHARGING_PORT",
                "EMERGENCY_EXIT"
            ],
            "busNumber": "DL01AB1234",

        }
    ],

```

3- Trip data

```javascript
// data for 2 trips date 2024/08/27
const tripData = [
  {
    route: {
      startLocation: "Bangalore",
      endLocation: "Chennai",
      stops: [
        {
          stopId: 1,
          title: "Majestic Bus Station",
          arrivalTime: 1724747400000,
          departureTime: 1724748300000,
        },
        {
          stopId: 2,
          title: "Silk Board Junction",
          arrivalTime: 1724750100000,
          departureTime: 1724751000000,
        },
        {
          stopId: 3,
          title: "Electronic City Phase 1",
          arrivalTime: 1724752800000,
          departureTime: 1724753700000,
        },
        {
          stopId: 11,
          title: "T. Nagar Bus Depot",
          arrivalTime: 1724758200000,
          departureTime: 1724759100000,
        },
        {
          stopId: 13,
          title: "Velachery Bus Stop",
          arrivalTime: 1724765400000,
          departureTime: 1724766300000,
        },
      ],
    },
    _id: "66ceb0bd6df612208a51147d",
    busId: "66ce09fa4dadab228108d353",
    arrivalTime: 1724779800000,
    departureTime: 1724747400000,
    driverName: "Priti Kumari",
    status: "scheduled",
  },
  {
    route: {
      startLocation: "Bangalore",
      endLocation: "Chennai",
      stops: [
        {
          stopId: 1,
          title: "Majestic Bus Station",
          arrivalTime: 1724752800000,
          departureTime: 1724753700000,
        },
        {
          stopId: 2,
          title: "Silk Board Junction",
          arrivalTime: 1724755500000,
          departureTime: 1724756400000,
        },
        {
          stopId: 3,
          title: "Electronic City Phase 1",
          arrivalTime: 1724758200000,
          departureTime: 1724759100000,
        },
        {
          stopId: 9,
          title: "CMBT (Chennai Mofussil Bus Terminus)",
          arrivalTime: 1724763600000,
          departureTime: 1724764500000,
        },
        {
          stopId: 10,
          title: "Guindy Bus Stop",
          arrivalTime: 1724770800000,
          departureTime: 1724771700000,
        },
      ],
    },
    _id: "66ceb1046df612208a511484",
    busId: "66ceb0596df612208a51144b",
    arrivalTime: 1724781600000,
    departureTime: 1724749200000,
    driverName: "Rajesh Kumar",
    status: "scheduled",
  },
];
```

query data of trips

```javascript
{
   "sourceCityId": "66ce06c700ae57c44a835de1",  //Banglore
    "destinationCityId": "66ce0bf5ede97ea7fce4cb26", //chennai
    "travelDate": 1724760000000  // 2024/08/27T12:00:00Z
}
```
