const express = require('express');
const { registrationControler, loginControler, otpVerify } = require('../controllers/Auth');
 
 
const router = express.Router();

 
 
router.post('/register', registrationControler)
 
router.post('/login', loginControler)
 
router.post('/otpVerify', otpVerify)

 
 
module.exports = router;
