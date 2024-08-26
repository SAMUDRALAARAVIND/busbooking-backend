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
      busPartner: String,
      departureTime: Number,
      arrivalTime: Number, // epoch time
      amenities: [String],
      averageRating: Number,
      numberOfRatings: Number,
      availableSeats: Number,
      busType: String,
      minPrice: Number,
      maxPrice: Number,
      boardingPoints: [Number],
      droppingPoints: [Number]
    },
  ];
}
```

```bash
chennai: [ 10, {stopId: 20, title: "Ambedkar statue", directions: "", lat: 38.4, lng: 49.4 }, 40, 50, 80 ]

Trips:
    trip1: [20, 40, 80]
    trip2: [10, 20, 80, 3939]
```
