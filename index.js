const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const cityRouter = require("./controllers/city");
const tripRouter = require("./controllers/trip.js");
const signUpRouter = require("./controllers/signUp");
const loginRouter = require("./controllers/login");
const bookingRouter = require("./controllers/booking");
const seatRouter = require("./controllers/seat.js");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = require("./controllers/generateOtp.js");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected successfully"));
app.use(cors());

app.use(cookieParser());

app.use("/city", cityRouter);
app.use("/api/trips", tripRouter);
app.use("/api/seat", seatRouter);
app.use("/register", signUpRouter);
app.use("/auth", loginRouter);
app.use("/booking", bookingRouter);
app.use("/otp", router);

const PORT = process.env.PORT || 8080;
const MODE = process.env.NODE_ENV || "production";

// if (MODE === "production") {
//   app.use(express.static(path.resolve("public")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve("public", "index.html"));
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.status(200).send("server is running");
//   });
// }

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`App is running at ${PORT} in ${MODE} mode`);
});
