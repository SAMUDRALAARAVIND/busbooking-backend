const bcrypt = require("bcryptjs");
const { userDataValidation } = require("../utils/authUtils");
const { sendVerificationMail } = require("../utils/emailUtils");
const userModel = require("../models/user");

const userSignUp = async (userData) => {
  const { fullName, gender, dob, email, contactNumber, password } = userData;

  try {
    await userDataValidation({ fullName, gender, dob, email, contactNumber, password });

    const existingUser = await userModel.findOne({
      $or: [{ email }, { contactNumber }]
    });
    if (existingUser) {
      throw new Error("User already exists with this email");
    }

    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT));

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = Date.now() + 10 * 60 * 1000;

    const newUser = new userModel({
      fullName,
      gender,
      dob,
      email,
      contactNumber,
      password: hashedPassword,
      otp,
      otpExpires
    });

    await newUser.save();

    sendVerificationMail(email, newUser.otp);

    return { message: "User registered successfully." };

  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { userSignUp };


// {
//   "fullName": "PRAVEEN Tiwari",
//   "gender": "male", // or "female", "other" based on your enum
//   "dob": 19900315,
//   "email": "johndoe@example.com",
//   "contactNumber": "123-456-7890",
//   "password": "SecurePassword123!"
// }