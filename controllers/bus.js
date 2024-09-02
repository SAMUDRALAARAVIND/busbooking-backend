const busRouter = require("express").Router();
const catchAsyncError = require("../middlewares/cathAsyncError.js");
const { getSeatLayout } = require("../services/busServices.js");

busRouter.get(
  "/layout",
  catchAsyncError(async (req, res, next) => {
    if (!req.query.tripId) {
      res.status(400);
      throw new Error("Please provide a valid tripId");
    }
    const data = await getSeatLayout(req.query);
    if (!data) {
      res.status(204);
      throw new Error("NO Trips Found for tripId ");
    }
    res.status(200).json({
      success: true,
      data,
    });
  })
);

module.exports = busRouter;
