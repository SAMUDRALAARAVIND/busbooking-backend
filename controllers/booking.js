const { bookTrip } = require("../services/bookingService");
const authenticateUser = require("../utils/authenticateUser");

const router = require("express").Router();

router.post("/book", authenticateUser, async (req, res) => {
  try {
    const bookedDetails = await bookTrip(req.body, req.id);
    return res
      .status(200)
      .json({ message: "Booking Successful", bookedDetails });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error occurred during booking a trip",
      error: error.message,
    });
  }
});

module.exports = router;
