const { getAllCities } = require("../services/cityService");

const router = require("express").Router();

router.get("/cities", async (req, resp) => {
  // sends list of cities
  try {
    const city = getAllCities()
    resp.status(200).json(city);
  } catch (error) {
    req.status(500).json({
      message: "Server error",
      error,
    });
  }
});

module.exports = router;
