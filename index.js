const express = require("express");
const mongoConnection = require("./connection/mongoConnection");
const cookieParser = require('cookie-parser');
require("dotenv").config();

const router = require("./routes/routes");


const app = express();
const cityRouter = require("./controllers/city");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

const PORT = process.env.PORT || 8000;
const MODE = process.env.NODE_ENV || "production";


//mongodb connection
mongoConnection()


app.use("/city", cityRouter);
app.use('/', router)



app.listen(PORT, () => {
  console.log(`App is running at ${PORT} in ${MODE} mode`);
});
