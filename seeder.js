// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const colors = require("colors");
// dotenv.config();

// //data
// const UserData = require("./data/user.js");
// const BusData = require("./data/bus.js");
// const BookingsData = require("./data/booking.js");
// const CityData = require("./data/city.js");
// const TripData = require("./data/trip.js");

// //models
// const User = require("./models/user.js");
// const Bus = require("./models/bus.js");
// const Bookings = require("./models/booking.js");
// const City = require("./models/city.js");
// const Trip = require("./models/trip.js");

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("connect successfully"))
//   .catch(console.log);

// console.log("Seeder is running");

// const importData = async () => {
//   try {
//     await User.deleteMany();
//     await Bus.deleteMany();
//     await City.deleteMany();
//     await Trip.deleteMany();
//     //inseting
//     const createdUsers = await User.insertMany(UserData);
//     const createdBuses = await Bus.insertMany(BusData);
//     const createdCity = await City.insertMany(CityData);
//     const cityIds = createdCity.map((city) => city._id);
//     const busIds = createdBuses.map((bus) => bus._id);

//     const sampleTrip = getFormatedTripData(
//       TripData,
//       createdBuses,
//       createdCity,
//       cityIds,
//       busIds
//     );
//     await Trip.insertMany(sampleTrip);
//     console.log("Data Inserted".green.inverse);
//     process.exit();
//   } catch (error) {
//     console.error(`error : ${error}`.red.inverse);
//     process.exit(1);
//   }
// };

// const getFormatedTripData = (
//   TripData,
//   createdBuses,
//   createdCity,
//   cityIds,
//   busIds
// ) => {
//   let cityIdCount = 0;
//   let busidCount = 0;
//   return TripData.map((trip) => {
//     let boardingPoints = [];
//     let droppingPoints = [];
//     trip.droppingPoints.forEach((p, idx) => {
//       const obj = {
//         ...p,
//         stopId: createdCity[cityIdCount + 1].stopPoints[idx].stopId,
//       };
//       droppingPoints.push(obj);
//     });
//     trip.boardingPoints.forEach((p, idx) => {
//       const obj = {
//         ...p,
//         stopId: createdCity[cityIdCount].stopPoints[idx].stopId,
//       };
//       boardingPoints.push(obj);
//     });

//     let price = 500;
//     let prices = [];
//     createdBuses[busidCount].layout?.upperDeck?.forEach((seat) => {
//       prices.push({
//         seatNumber: seat.seatNumber,
//         price,
//       });
//       price += 100;
//     });
//     createdBuses[busidCount].layout?.lowerDeck?.forEach((seat) => {
//       prices.push({
//         seatNumber: seat.seatNumber,
//         price,
//       });
//       price += 100;
//     });

//     const obj = {
//       ...trip,
//       source: cityIds[cityIdCount],
//       destination: cityIds[cityIdCount + 1],
//       busId: busIds[busidCount],
//       boardingPoints,
//       droppingPoints,
//       prices,
//     };
//     cityIdCount++;
//     busidCount++;
//     if (cityIdCount === cityIds.length - 1) cityIdCount = 0;
//     if (busidCount === busIds.length) busidCount = 0;
//     return obj;
//   });
// };

// const deleteData = async () => {
//   try {
//     await User.deleteMany();
//     await Bus.deleteMany();
//     await City.deleteMany();
//     await Trip.deleteMany();
//     console.error(`Data Deleted`.red.inverse);

//     process.exit();
//   } catch (error) {
//     console.error(`error : ${error}`.red.inverse);
//     process.exit(1);
//   }
// };

// if (process.argv[2] === "-d") {
//   deleteData();
// } else {
//   importData();
// }




const dotenv = require("dotenv");
const mongoose = require("mongoose");
const colors = require("colors");
dotenv.config();

//data
const UserData = require("./data/user.js");
const BusData = require("./data/bus.js");
const BookingsData = require("./data/booking.js");
const CityData = require("./data/city.js");
const TripData = require("./data/trip.js");

//models
const User = require("./models/user.js");
const Bus = require("./models/bus.js");
const Bookings = require("./models/booking.js");
const City = require("./models/city.js");
const Trip = require("./models/trip.js");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connect successfully"))
  .catch(console.log);

console.log("Seeder is running");

const importData = async () => {
  try {
    await User.deleteMany();
    await Bus.deleteMany();
    await City.deleteMany();
    // delete data old
    await Trip.deleteMany();
    //inseting
    const createdUsers = await User.insertMany(UserData);
    const createdBuses = await Bus.insertMany(BusData);
    const createdCity = await City.insertMany(CityData);
    const cityIds = createdCity.map((city) => city._id);
    const busIds = createdBuses.map((bus) => bus._id);

    let tripData = Array.from({ length: 1000 }, () => TripData[0]);

    const sampleTrip = getFormatedTripData(
      tripData,
      createdBuses,
      createdCity,
      cityIds,
      busIds
    );
    await Trip.insertMany(sampleTrip);
    console.log("Data Inserted".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`error : ${error}`.red.inverse);
    process.exit(1);
  }
};

const getFormatedTripData = (
  TripData,
  createdBuses,
  createdCity,
  cityIds,
  busIds
) => {
  let cityIdCount = 0;
  let busidCount = 0;
  const currentTime = parseInt(Date.now() / 1000);
  return TripData.map((trip, i) => {
    let boardingPoints = [];
    let droppingPoints = [];
    const startT = currentTime + i * 2 * 60;
    const endT = startT + 3 * 60 * 60;

    trip.droppingPoints.forEach((p, idx) => {
      const obj = {
        arrivalTime: endT - (trip.droppingPoints.length - i * 60),
        stopId: createdCity[cityIdCount + 1].stopPoints[idx].stopId,
      };
      droppingPoints.push(obj);
    });
    trip.boardingPoints.forEach((p, idx) => {
      const obj = {
        arrivalTime: startT + i * 60,
        stopId: createdCity[cityIdCount].stopPoints[idx].stopId,
      };
      boardingPoints.push(obj);
    });

    let price = 500;
    let prices = [];
    createdBuses[busidCount].layout?.upperDeck?.forEach((seat) => {
      prices.push({
        seatNumber: seat.seatNumber,
        price,
      });
      price += 100;
    });
    createdBuses[busidCount].layout?.lowerDeck?.forEach((seat) => {
      prices.push({
        seatNumber: seat.seatNumber,
        price,
      });
      price += 100;
    });

    trip.startTime = startT;
    trip.endTime = endT;
    const obj = {
      ...trip,
      source: cityIds[cityIdCount],
      destination: cityIds[cityIdCount + 1],
      busId: busIds[busidCount],
      boardingPoints,
      droppingPoints,
      prices,
    };
    cityIdCount++;
    busidCount++;
    if (cityIdCount === cityIds.length - 1) cityIdCount = 0;
    if (busidCount === busIds.length) busidCount = 0;
    return obj;
  });
};

const deleteData = async () => {
  try {
    await User.deleteMany();
    await Bus.deleteMany();
    await City.deleteMany();
    await Trip.deleteMany();
    console.error(`Data Deleted`.red.inverse);

    process.exit();
  } catch (error) {
    console.error(`error : ${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  deleteData();
} else {
  importData();
}