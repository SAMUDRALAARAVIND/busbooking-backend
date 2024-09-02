const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "Gmail", 
//   secure: true,
//   port : 465 ,
//   auth: {
//     user: process.env.EMAIL_USER, 
//     pass: process.env.EMAIL_PASS, 
//   },
// });

// const sendEmail = async ({ to, subject, text, html }) => {
//   try {
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to,
//       subject,
//       text,
//       html,
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent: " + info.response);
//     return info;
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw new Error("Email sending failed");
//   }
// };

// module.exports = { sendEmail };



const sendVerificationMail = (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Email Verification for Your App",
        text: `Your OTP for email verification is ${otp}. It is valid for 10 minutes.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
};

module.exports = { sendVerificationMail };