const { userSignUp } = require("../services/signupService");

const router = require("express").Router();

router.post("/signUp", async (req, res) => {
  try {
    const result = await userSignUp(req.body);
    return res.status(200).json({ message: result });
  } catch (error) {
    return res.status(500).json({
      message: "Server error occurred during sign-up",
      error: error.message,
    });
  }
});

module.exports = router;
