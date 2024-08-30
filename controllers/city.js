const { getAllCities } = require("../services/cityService");

const router = require("express").Router();

router.get("/cities", async (req, resp) => {
  // sends list of cities
  try {
    resp.status(200).json(getAllCities());
  } catch (error) {
    req.status(500).json({
      message: "Server error",
      error,
    });
  }
});

module.exports = router;
