const getTrips = require("../services/tripServices.js");
const tripRouter = require("express").Router();
const catchAsyncError = require("../middlewares/catchAsyncError.js");
const CustomError = require("../utils/createCustomError.js");

tripRouter.post(
  "/details",
  catchAsyncError(async (req, res, next) => {
    let { sourceCityId, destinationCityId, travelDate } = req.body;

    // console.log(sourceCityId)
    // console.log(destinationCityId)
    // console.log(travelDate)

    // handling if query data is not present
    if ((!sourceCityId || !destinationCityId, !travelDate)) {
      throw new CustomError("Please provide proper Qurey Details", 400);
    }
    const data = await getTrips(req.body, res);
    console.log(data)
    res.status(200).json(data);
  })
);

module.exports = tripRouter;
