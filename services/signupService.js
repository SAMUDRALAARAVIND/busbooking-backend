const bcrypt = require("bcryptjs");
const { userDataValidation } = require("../utils/authUtils");
// const { sendVerificationMail } = require("../utils/emailUtils");
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
      return "User already exists with this email";
    }

    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT));

    const otpRecord = await Otp.findOne({ email });
    console.log(otpRecord)
    if (!otpRecord || !otpRecord.isEmailVerified) {
      throw "OTP not verified for this email.";
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

    return { message: "User registered successfully." };

  } catch (error) {
    return error;
  }
};

module.exports = { userSignUp };