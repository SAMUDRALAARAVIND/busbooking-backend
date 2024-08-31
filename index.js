const express = require("express");
const app = express();
// import "dotenv/config";
require("dotenv").config();
const tripRouter = require("./controllers/trip.js");
const { default: mongoose } = require("mongoose");
const { notFound, errorHandler } = require("./middlewares/errorHandler.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/trips", tripRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
const MODE = process.env.NODE_ENV || "production";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected successfully"));

app.listen(PORT, () => {
  console.log(`App is running at ${PORT} in ${MODE} mode`);
});
