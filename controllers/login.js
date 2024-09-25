const { userLogin } = require("../services/loginService");
const router = require("express").Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body; 
    const token = await userLogin({ email, password });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({
      message: "Login failed",
      error: error.message,
    });
  }
});

module.exports = router;
