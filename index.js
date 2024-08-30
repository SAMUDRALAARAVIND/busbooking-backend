const express = require("express");
const mongoConnection = require("./connection/mongoConnection");
const cookieParser = require('cookie-parser');

const { registrationControler, loginControler, otpVerify } = require("./controler/Auth");
const router = require("./routes/routes");


const app = express();
require('dotenv').config()

app.use(cookieParser());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;
const MODE = process.env.NODE_ENV || "production";


//connection

mongoConnection()



app.use('/', router)

app.use('/', router)

app.use('/register', router)





app.listen(PORT, () => {
  console.log(`App is running at ${PORT} in ${MODE} mode`);
});
