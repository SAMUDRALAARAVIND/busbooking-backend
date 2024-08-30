const express = require("express");
const app = express();
// import "dotenv/config";
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;
const MODE = process.env.NODE_ENV || "production";

app.listen(PORT, () => {
  console.log(`App is running at ${PORT} in ${MODE} mode`);
});
