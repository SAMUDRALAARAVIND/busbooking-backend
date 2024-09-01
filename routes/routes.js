const express = require('express');
const { registrationControler, loginControler, otpVerify, bookingDetail } = require('../controllers/Auth');
 
 
const router = express.Router();

 
 
router.post('/register', registrationControler)
 
router.post('/login', loginControler)
 
router.post('/otpVerify', otpVerify)

router.post('/book', bookingDetail)

 
 
module.exports = router;
