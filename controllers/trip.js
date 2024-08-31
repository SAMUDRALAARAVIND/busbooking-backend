const getTrips = require("../services/tripServices.js");
const router = require("express").Router();
const catchAsyncError = require("../middlewares/cathAsyncError.js");

router.post(
  "/details",
  catchAsyncError(async (req, res, next) => {
    const data = await getTrips(req, res, next);
    res.status(200).json(data);
  })
);

module.exports = router;
