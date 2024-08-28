const express = require("express");
const dotenv = require("dotenv");
const app = express();

// parsing env variable
dotenv.config();

//==========
//body parser
//==========
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//==========
//bus routes
//city routes
//trip routes
//globalErrorHndlr
//==========
const busRouter = require("./routes/busRouter");
const cityRouter = require("./routes/cityRouter");
const tripRouter = require("./routes/tripRouter");
const globalErrorHandler = require("./midlewares/globalErrorHandler.js");

app.use("/api/v1", busRouter);
app.use("/api/v1", cityRouter);
app.use("/api/v1", tripRouter);

// handling error globaly
app.use(globalErrorHandler);

// ==============
// creating server`
// ==============
const { connect } = require("mongoose");
const PORT = process.env.PORT || 8000;
const MODE = process.env.NODE_ENV || "production";

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log("Listening on port", PORT, "in", MODE, "mode");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
