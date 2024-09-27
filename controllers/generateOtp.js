const { verifyOtp, generateOtp } = require("../services/OtpService");

const router = require("express").Router();

router.post("/generate-otp", async (req, res) => {
  const { email } = req.body;

  try {
    console.log("generate-opt", email);
    const message = await generateOtp({ email });
    return res.status(200).json({ message: message });
  } catch (error) {
    return res.status(400).json({
      message: "OTP not generated",
      error: error.message,
    });
  }
});

router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;
  try {
    const verificationMessage = await verifyOtp({ email, otp });
    return res.status(200).json({ message: verificationMessage });
  } catch (error) {
    return res.status(400).json({
      message: "OTP verification failed",
      error: error.message,
    });
  }
});

module.exports = router;
