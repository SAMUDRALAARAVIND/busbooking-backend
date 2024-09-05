const express = require("express");
const app = express();
require("dotenv").config();

const globalErrorHandler = require("./middlewares/globalErrorHandler");
const cityRouter = require("./controllers/city");
const tripRouter = require("./controllers/trip.js");
const seatRouter = require("./controllers/seat.js");
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected successfully"));

app.use("/city", cityRouter);
app.use("/api/trips", tripRouter);
app.use("/api/seats", seatRouter);

app.use(globalErrorHandler);

const PORT = process.env.PORT || 8000;
const MODE = process.env.NODE_ENV || "production";

app.listen(PORT, () => {
  console.log(`App is running at ${PORT} in ${MODE} mode`);
});
