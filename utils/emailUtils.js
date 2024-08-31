const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail", 
  secure: true,
  port : 465 ,
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email sending failed");
  }
};

module.exports = { sendEmail };
