const JWT = require("jsonwebtoken")

// Validate email format using your regex
const isEmailValidate = (key) => {
  const isEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
      key
    );
  return isEmail;
};

// Validate user data
const userDataValidation = ({ fullName, email, password, gender }) => {
  return new Promise((resolve, reject) => {
    if (!fullName || !email || !password || !gender) {
      return reject("Missing required user data");
    }

    if (typeof email !== "string") return reject("Email must be a string");
    if (typeof fullName !== "string") return reject("Full name must be a string");
    if (typeof password !== "string") return reject("Password must be a string");
    if (typeof gender !== "string") return reject("Gender must be a string");

    if (fullName.length < 5 || fullName.length > 50) {
      return reject("Full name length should be 5 - 50 characters");
    }

    if (!isEmailValidate(email)) {
      return reject("Email format is incorrect");
    }


    resolve();
  });
};

const userOtpMailValidate = ({ email }) => {
  return new Promise((resolve, reject) => {
    console.log(email);
    if (!email) {
      return reject("Missing required user data");
    }

    if (typeof email !== "string") return reject("Email must be a string");

    if (!isEmailValidate(email)) {
      return reject("Email format is incorrect");
    }

    resolve();

  })
}


module.exports = { userDataValidation, isEmailValidate, userOtpMailValidate };
