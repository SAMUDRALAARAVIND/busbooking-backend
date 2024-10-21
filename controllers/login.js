const { userLogin } = require("../services/loginService");
const router = require("express").Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await userLogin({ email, password });
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        message: "Welcome back",
        success: true,
        token,
      });
    // res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({
      message: "Login failed",
      error: error.message,
    });
  }
});

module.exports = router;
