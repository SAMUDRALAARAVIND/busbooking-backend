const crypto = require('crypto');


const generateOTP = () => {
    const random = crypto.randomInt(100000, 999999).toString()
    return random;
}

module.exports = generateOTP;