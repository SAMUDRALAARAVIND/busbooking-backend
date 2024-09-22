const userModel = require('../models/user');
const bcrypt = require("bcryptjs");
const generateOTP = require('../utils/generateOTP');
const sendMail = require('../utils/sendMail');
const jwt = require("jsonwebtoken");
const bookingDetailValidator = require('../utils/bookingDetailValidator');


const tripModel = require('../models/trip');
const busModel = require('../models/bus')

// const registrationControler = async (req, res) => {
//     console.log("hit")
//     const { fullName, gender, dob, email, contactNumber, password } = req.body;

//     console.log(req.body)
//     try {

//         let user = await userModel.findOne({
//             $or: [{ email }, { contactNumber }]
//         })
//         if (user) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         const otp = generateOTP();

//         const hashedPassword = await bcrypt.hash(
//             password,
//             parseInt(process.env.SALT)
//         );

//         user = new userModel({
//             fullName,
//             gender,
//             dob,
//             email,
//             contactNumber,
//             password: hashedPassword,
//             otp: otp,
//         });

//         await sendMail(email, otp)

//         await user.save()

//         res.cookie('userDetail', JSON.stringify(user)), {
//             httpOnly: true
//         }
//         // console.log(res.cookie.userDetail)
          
//         res.status(200).json(user)
//     } catch (error) {
//         return res.send({
//             message: 'Failed to register user',
//             error
//         })
//     }
// }

const registrationControler = async (req, res) => {
    console.log("hit");
    const { fullName, gender, dob, email, contactNumber, password } = req.body;

    console.log("Request body:", req.body);
    try {
        let user = await userModel.findOne({
            $or: [{ email }, { contactNumber }]
        });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const otp = generateOTP();
        console.log("Generated OTP:", otp);

        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT));
        console.log("Hashed Password:", hashedPassword);

        user = new userModel({
            fullName,
            gender,
            dob,
            email,
            contactNumber,
            password: hashedPassword,
            otp: otp,
            emailAuthenticate : false
        });

        await sendMail(email, otp);
        await user.save();

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );
        console.log(token)
        res.status(200).json(token);
    } catch (error) {
        console.error("Error saving user:", error);
        return res.status(500).json({
            message: 'Failed to register user',
            error: error.message
        });
    }
}


const otpVerify = (req, res) => {
    
    const { otp } = req.body
    console.log(req.body)

    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    console.log(userDetail)
    if (userDetail) {
        userDetail = JSON.parse(userDetail)
    }
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userDetail = userModel.findOne({email: decoded.email})
       
        if (!userDetail) {
            return res.status(401).json({ message: 'User not found' })
        }
        if (userDetail.otp !== otp) {
            return res.status(401).json({ message: 'Incorrect OTP' })
        } 

        if(userDetail.otp == otp){
            userDetail.emailAuthenticate = true
        }

        return res.status(200).json({ message: "otp successfull verified" })
    } catch (error) {
        return res.status(401).json({ message: error })
    }
}

const loginControler = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(401).json("please enter your email and password")
    try {
        let user = await userModel.find({
            email: email
        })
        if (!user) return res.status(400).json({ message: 'User not found' })

        const match = bcrypt.compare(password, user.password)

        if (!match) return res.status(400).json({ message: 'Incorect Password' })

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({ message: 'User logged in successfully', token: token })
    } catch (error) {
        res.status(500).json({ message: 'Error: ' + error.message })
    }
}

const bookingDetail = async (req, res) => {
    
    const { tripId, boardingPointId, droppingPointId, seatsInfo, pocDetails } = req.body;

    try {
       await bookingDetailValidator({ tripId, boardingPointId, droppingPointId, seatsInfo, pocDetails });

       const trip = await tripModel.findOne({ _id: tripId });
       if (!trip) {
           return res.status(404).json({ message: 'Trip not found' });
       }
       const bus = await busModel.findOne({ _id: trip.busId });
        if (!bus) {
            return res.status(404).json({ message: 'Bus not found' });
        }

       const seatPrices = seatsInfo.map((seat) => {
        let totalPrice;
           const priceInfo = trip.prices.map((p) => p.seatNumber === seat.seatNumber)
           if (!priceInfo) {
               throw new Error(`Price not found for seat ${seat.seatNumber}`);
           }
           return { ...seat, price: totalPrice += priceInfo.price };
       })

       res.status(201).json({
           message: 'Booking successful',
           tripId,
           boardingPointId,
           droppingPointId,
           pocDetails,
           seatPrices
       });
       
    } catch (error) {
        console.log('Booking error:', error.message);
        res.status(400).json({ message: 'Server error', error: error.message });
    }
}


module.exports = { registrationControler, loginControler, otpVerify, bookingDetail };


