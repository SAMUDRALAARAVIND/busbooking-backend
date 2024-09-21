const express = require("express");
const mongoConnection = require("./connection/mongoConnection");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require("mongoose");
require("dotenv").config();

const router = require("./routes/routes");


const app = express();

// const cityRouter = require("./controllers/city");

app.use(cors());
// require("dotenv").config();
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const cityRouter = require("./controllers/city");
const tripRouter = require("./controllers/trip.js");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("connected successfully"));



app.use(globalErrorHandler);

const PORT = process.env.PORT || 8000;
const MODE = process.env.NODE_ENV || "production";


//mongodb connection
mongoConnection()


app.use("/city", cityRouter);
app.use("/api/trips", tripRouter);
app.use('/', router)



app.listen(PORT, () => {
  console.log(`App is running at ${PORT} in ${MODE} mode`);
});
