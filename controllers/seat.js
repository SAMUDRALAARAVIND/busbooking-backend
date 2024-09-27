const seatRouter = require("express").Router();
const catchAsyncError = require("../middlewares/catchAsyncError.js");
const CustomError = require("../utils/createCustomError.js");
const { getSeatLayout } = require("../services/seatServices.js");

seatRouter.get(
  "/layout",
  catchAsyncError(async (req, res, next) => {
    console.log(req.query.tripId);
    if (!req.query.tripId) {
      throw new CustomError("Please provide a valid tripId", 400);
    }
    const data = await getSeatLayout(req.query);
    if (!data) {
      throw new CustomError("NO Trips Found for tripId", 404);
    }
    res.status(200).json(data);
  })
);

module.exports = seatRouter;
