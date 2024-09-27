const nodemailer = require("nodemailer");

const sendVerificationMail = (email, otp) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Email Verification for Your App",
      text: `Your OTP for email verification is ${otp}. It is valid for 10 minutes.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject("OTP sharing failed. Please try again.");
      } else {
        resolve("OTP sent successfully.");
      }
    });
  });
};

module.exports = { sendVerificationMail };
