const express = require("express");
const mongoose = require("mongoose");
// const cityModel = require("./models/city");
const tripRouter = require("./routes/tripRoute");

require("dotenv").config();

// constants
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

// connecting mongodb
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => {
    console.log("Failed to connect to mongoDB", err);
  });

const app = express();

app.use(express.json()); // body-parser

// routes middlewares
app.use("/trip", tripRouter);

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
