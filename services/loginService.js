const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

const userLogin = async ({ identifier, password }) => {
  if(!identifier || !password) return res.status(401).json("please enter your email and password")
  try {
    const isEmail = identifier.includes("@");

    const user = await userModel.findOne(
      isEmail ? { email: identifier } : { contactNumber: identifier }
    );

    if (!user) {
      throw new Error("User does not exist");
    }

    if (!user.isEmailVerified) {
      throw new Error("Verify your email before login.");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return token;
  } catch (error) {
    throw new Error(error.message || "Unknown error occurred during login");
  }
};

module.exports = { userLogin };
