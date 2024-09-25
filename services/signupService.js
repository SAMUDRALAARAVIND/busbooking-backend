const bcrypt = require("bcryptjs");
const { userDataValidation } = require("../utils/authUtils");
const userModel = require("../models/user");
const Otp = require("../models/otp");

const userSignUp = async (userData) => {
  const { fullName, gender, dob, email, contactNumber, password } = userData;

  try {
    await userDataValidation({ fullName, gender, email, contactNumber, password });

    const existingUser = await userModel.findOne({
      $or: [{ email }, { contactNumber }]
    });

    if (existingUser) {
      throw new Error("User already exists with this email");
    }

    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT));

    const otpRecord = await Otp.findOne({ email });
    
    if (!otpRecord || !otpRecord.isEmailVerified) {
      throw new Error("OTP not verified for this email.")
    }

    const newUser = new userModel({
      fullName,
      gender,
      dob,
      email,
      contactNumber,
      password: hashedPassword,
    });

    await newUser.save();

    return "User registered successfully.";

  } catch (error) {
    throw new Error(error.message || error);
  }
};

module.exports = { userSignUp };