const express = require("express");
const mongoose = require("mongoose")
const app = express();
require ("dotenv/config");

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("db coonected"))
.catch((e)=>console.log("db connection failde"))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;
const MODE = process.env.NODE_ENV || "production";


app.listen(PORT, () => {
  console.log(`App is running at ${PORT} in ${MODE} mode`);
});
