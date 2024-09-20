const nodemailer = require('nodemailer');

const sendMail = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL, 
        to: email, 
        subject : "Your OTP Code", 
        text : `Your OTP code is ${otp} `, 
    }

    await transporter.sendMail(mailOptions)
}


module.exports = sendMail;