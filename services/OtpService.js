const Otp = require("../models/otp");
const { userOtpMailValidate } = require("../utils/authUtils");
const { sendVerificationMail } = require("../utils/emailUtils");

const generateOtp = async ({ email }) => {
  try {
    await userOtpMailValidate({ email });

    const otpRecord = await Otp.findOne({ email });

    if (otpRecord) {
      return "An OTP has already been generated for this email. Please check your inbox.";
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const newOtp = new Otp({ email, otp: otp });
    await newOtp.save();

    await sendVerificationMail(email, newOtp.otp);
    return "Otp send to your Mail";
  } catch (error) {
    throw new Error(error);
  }
};

const verifyOtp = async ({ email, otp }) => {
  try {
    const otpRecord = await Otp.findOne({ email });
    if (!otpRecord) {
      return "User not found";
    }

    if (otpRecord.isEmailVerified) {
      return "OTP has already been verified.";
    }

    if (otpRecord.otp !== otp) {
      return "Incorrect OTP";
    }

    otpRecord.isEmailVerified = true;
    await otpRecord.save();

    return "Otp successfull verified";
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  generateOtp,
  verifyOtp,
};
