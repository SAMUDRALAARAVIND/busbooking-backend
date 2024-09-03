API Requirements

### Cities List API

OWNERS: [ Shweta, Praveen, Anjali ]

Request Method: GET

payload: null

Response:

- StatusCode: 200

```javascript
{
  cities: [
    {
      cityId: String,
      name: String,
      state: String,
    },
  ];
}
```

### Trips List

OWNERS: [ Kapil, Sai Kiran, Prakriti, Shahzeb, Kajal ]

Request Method: POST

payload:

```javascript
{
    sourceCityId: String,
    destinationCityId: String,
    travelDate: Number // epoch time.
}
```

Response:

```javascript
{
  boardingPoints: [
    {
        stopId: Number,
        title: String,
        directions: String,
        lat: Number,
        lng: Number
    }
  ],
  droppingPoints: [
    {
        stopId: Number,
        title: String,
        directions: String,
        lat: Number,
        lng: Number
    }
  ],
  trips: [
    {
      busId: String,
      // used for fetching the seat layout
      tripId: String,
      // used while booking any seats for this trip.
      busPartner: String, //bus
      departureTime: Number,
      arrivalTime: Number, // epoch time
      amenities: [String], //bus
      averageRating: Number, //hard code
      numberOfRatings: Number,//hard code
      availableSeats: Number,//hard code
      busType: String,//bus
      minPrice: Number,
      maxPrice: Number,
      boardingPoints: [Number],
      droppingPoints: [Number]
    },
  ];
}
```

```
chennai: [ 10, {stopId: 20, title: "Ambedkar statue", directions: "", lat: 38.4, lng: 49.4 }, 40, 50, 80 ]

Trips:
    trip1: [20, 40, 80]
    trip2: [10, 20, 80, 3939]
```

### Seat Layout API

GET `bus/layout?tripId={trip_id}`

Response:

```javascript
{
  upperDeck: {
    seats: [
      {
        seatNumber: "L3",
        gender: "M" | "F" | "O" | null, // null for available seat
        row: 10,
        column: 3,
        price: number,
      }
    ]
  },
  lowerDeck: {
    seats: [
      {
        seatNumber: "L3",
        gender: "M" | "F" | "O" | null, // null for available seat
        row: 10,
        column: 3,
        price: number,
      }
    ]
  }
}
```

Error scenarios:

Invalid tripId:( when all seats are booked )

```javascript
{
  error: "trip is not available";
}
```

### Booking API

** This action can only be done by a loggedin user. **

POST `/book`

Request:

- all the data in request should be validated
- take the price details from database as they're the source of truth.

```javascript
{
  tripId: String,
  boardingPointId: Number,
  droppingPointId: Number,
  seatsInfo: [
    {
      seatNumber: "L3",
      name: "",
      age: "",
      gender: "" // M | F | O
    }
  ],
  pocDetails: {
    contactNumber: string,
    name: string,
    email: string
  }
}
```

praveen & team:
Praveen(Lead)
Manish
Shweta
Anjali
Sai kiran

Disordered team:
Kapil(Lead)
Kajal
Shahzeb
Prakriti
