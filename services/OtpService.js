const userModel = require("../models/user");
const { sendVerificationMail } = require("../utils/emailUtils");

const verifyOtp = async ({ email, otp }) => {
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            throw new Error("User not found");
        }

        if (user.otp !== otp) {
            throw new Error("Incorrect OTP");
        }

        if (user.otpExpires < Date.now()) {
            throw new Error("expired OTP");
        }

        user.isEmailVerified = true;
        user.otp = undefined;
        user.otpExpires = undefined;

        await user.save();
        return "Otp successfull verified";
    } catch (error) {
        throw new Error(error.message);
    }
}

const regenerateOtp = async ({ email }) => {
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            throw new Error("User not found");
        }
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpires = Date.now() + 10 * 60 * 1000;

        user.otp = otp;
        user.otpExpires = otpExpires;

        await user.save();

        // Send the new OTP via email
        await sendVerificationMail(email, otp);
        return  "Otp send to your Mail";
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { 
    verifyOtp,
    regenerateOtp
 };
