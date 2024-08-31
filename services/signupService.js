const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { userDataValidation } = require("../utils/authUtils");

const userSignUp = async (userData) => {
  const { fullName, gender, dob, email, contactNumber, password } = userData;

  try {
    await userDataValidation({ fullName, gender, dob, email, contactNumber, password });

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists with this email");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
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
    console.error("Error during user sign-up:", error);
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