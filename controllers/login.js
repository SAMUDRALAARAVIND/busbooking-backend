const { userLogin } = require("../services/loginService");
const router = require("express").Router();

router.post("/login", async (req, res) => {
  try {
    const { identifier, password } = req.body; 
    const token = await userLogin({ identifier, password });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({
      message: "Login failed",
      error: error.message,
    });
  }
});

module.exports = router;
