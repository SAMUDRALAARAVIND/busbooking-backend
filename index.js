const express = require("express");
const app = express();
const cityRouter = require("./controllers/city");
const mongoose = require('mongoose');
const cors = require('cors');

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin:process.env.REACT_APP
}))

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 8000;
const MODE = process.env.NODE_ENV || "production";

mongoose.connect(MONGO_URI).then(()=>{console.log("MongoDB Connected")}).catch((err)=>{console.log("Error in connecting mongodb: ",err)});

app.use("/city", cityRouter);

app.listen(PORT, () => {
  console.log(`App is running at ${PORT} in ${MODE} mode`);
});
