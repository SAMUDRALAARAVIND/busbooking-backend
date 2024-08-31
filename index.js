const express = require("express");
const app = express();
const cityRouter = require("./controllers/city");
<<<<<<< HEAD
=======
const signUpRouter = require("./controllers/signUp")
const { connectDb } = require("./database/db");
const loginRouter = require("./controllers/login")
>>>>>>> origin/feat/signUp_Login_api

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;
const MODE = process.env.NODE_ENV || "production";

<<<<<<< HEAD
app.use("/city", cityRouter);

app.listen(PORT, () => {
  console.log(`App is running at ${PORT} in ${MODE} mode`);
});
=======
connectDb();

app.use("/city", cityRouter);
app.use("/register" , signUpRouter)
app.use("/auth" , loginRouter)

app.listen(PORT, () => {
  console.log(`App is running at  http://localhost:${PORT} in ${MODE} mode`);
});
>>>>>>> origin/feat/signUp_Login_api
