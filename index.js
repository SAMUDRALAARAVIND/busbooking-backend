const express = require("express");
const app = express();
require("dotenv").config();

const globalErrorHandler = require("./middlewares/globalErrorHandler");
const cityRouter = require("./controllers/city");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// globalError handler
app.use(globalErrorHandler);

const PORT = process.env.PORT || 8000;
const MODE = process.env.NODE_ENV || "production";

app.use("/city", cityRouter);

app.listen(PORT, () => {
  console.log(`App is running at ${PORT} in ${MODE} mode`);
});
