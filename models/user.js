const { Schema, model } = require("mongoose");
const { genders } = require("./booking.js");

const userSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Please enter your username"],
    unique: true,
    minLength: [5, "Username should be more than 5 characters"],
  },
  gender: {
    type: String,
    enum: genders,
    required: [true, "Gender is required"],
  },
  dob: {
    type: Number,
    //required: true,
  },
  email: {
    // TODO: handle email validation
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
  },
  contactNumber: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
  // otp: {
  //   type: String,
  // },
  // isEmailVerified: {
  //   type: Boolean,
  //   default: false,
  // },
});

const userModel = model("User", userSchema);

module.exports = userModel;
