const getTrips = require("../services/tripServices.js");
const tripRouter = require("express").Router();
const catchAsyncError = require("../middlewares/cathAsyncError.js");

tripRouter.post(
  "/details",
  catchAsyncError(async (req, res, next) => {
    let { sourceCityId, destinationCityId, travelDate } = req.body;

    // handling if query data is not present
    if ((!sourceCityId || !destinationCityId, !travelDate)) {
      res.status(400);
      throw new Error("Please provide proper Qurey Details");
    }
    const data = await getTrips(req.body, res);
    res.status(200).json(data);
  })
);

module.exports = tripRouter;
