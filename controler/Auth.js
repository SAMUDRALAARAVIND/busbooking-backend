const userModel = require('../models/user');
const bcrypt = require("bcryptjs");
const generateOTP = require('../utils/generateOTP');
const sendMail = require('../utils/sendMail');
 
const registrationControler = async (req, res) => {
 
    console.log("hit")
    const { fullName, gender, dob, email, contactNumber, password } = req.body;
    try {
 
        let user = await userModel.findOne({
            $or: [{ email },{ contactNumber }]
        })
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
 
        const otp =  generateOTP();
 
        const hashedPassword = await bcrypt.hash(
            password,
            parseInt(process.env.SALT)
        );
 
        user = new userModel({
            fullName,
            gender,
            dob,
            email,
            contactNumber,
            password: hashedPassword,
            otp:otp,
            isActive: false
        });
   
        await sendMail(email, otp)
 
        res.cookie('userDetail', JSON.stringify(user)), {
                httpOnly: true
            }
            // console.log(res.cookie.userDetail)
        res.status(200).json(user)
    } catch (error) {
        return res.send({
            message: 'Failed to register user',
            error
        })
    }
}
 
 
const otpVerify = (req, res) => {
    const { otp } = req.body
    console.log("hit otp verify")
    let userDetail = req.cookies.userDetail;
    if( userDetail ) {
        userDetail   = JSON.parse(userDetail)
    }
    try {
        // const userDetail = userModel.findOne({email: userDetail.email})
        if(!userDetail) { 
            return res.status(401).json({ message: 'User not found' })
        }  
        if(userDetail.otp !== otp) {
            return res.status(401).json({ message: 'Incorrect OTP' })
        }
       return res.status(200).json({ message: "otp successfull verified" })
    } catch (error) {
        return res.status(401).json({ message: error })
    }
}
 
const loginControler = async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) return res.status(401).json("please enter your email and password")
    try {
        let user = await userModel.find({
            email: email
        })
        if (!user) return res.status(400).json({ message: 'User not found' })
        const match = bcrypt.compare(password, user.password)
        if (!match) return res.status(400).json({ message: 'Incorect Password' })
        res.status(200).json({ message: 'User logged in successfully', token: user._id })
    } catch (error) {
        res.status(500).json({ message: 'Error: ' + error.message })
    }
}
 
 
module.exports = { registrationControler, loginControler, otpVerify };
 
 
