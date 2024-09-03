const express = require("express");
const app = express();
const cityRouter = require("./controllers/city");
const signUpRouter = require("./controllers/signUp")
const { connectDb } = require("./database/db");
const loginRouter = require("./controllers/login");
const bookingRouter = require("./controllers/booking");
const router = require("./controllers/generatedOtp");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;
const MODE = process.env.NODE_ENV || "production";

connectDb();

app.use("/city", cityRouter);
app.use("/register" , signUpRouter);
app.use("/auth" , loginRouter);
app.use("/booking", bookingRouter);

app.use("/otp", router);

app.listen(PORT, () => {
  console.log(`App is running at  http://localhost:${PORT} in ${MODE} mode`);
});

