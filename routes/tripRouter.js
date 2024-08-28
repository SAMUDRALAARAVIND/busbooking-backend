const express = require("express");
const {
  createTrip,
  getAllTrip,
  getFilteredTrip,
} = require("../controllers/tripControllers.js");

const router = express.Router();

router.route("/trip").post(createTrip);
router.route("/trip").get(getAllTrip);
router.route("/trips").post(getFilteredTrip);

module.exports = router;
