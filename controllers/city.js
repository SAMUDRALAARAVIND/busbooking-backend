const { getAllCities } = require("../services/cityService");

const router = require("express").Router();

router.get("/cities", async (req, res) => {
  // sends list of cities
  try {
    const cities = await getAllCities();
    res.status(200).json(cities);
  } catch (error) {
    req.status(500).json({
      message: "Server error",
      error,
    });
  }
});

module.exports = router;
