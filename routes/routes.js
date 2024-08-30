const express = require('express');
const { registrationControler, loginControler, otpVerify } = require('../controler/Auth');
 
 
const router = express.Router();
 
 
router.post('/register', registrationControler)
 
router.post('/login', loginControler)
 
router.post('/otpVerify', otpVerify)
 
 
module.exports = router;
