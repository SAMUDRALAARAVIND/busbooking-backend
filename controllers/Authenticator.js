const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization']?.split(' ')[1]; // Adjust based on how you send the token

    if (!token) {
        return res.status(401).json({
            message: "You are not authorized"
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: "Invalid token"
            });
        }

        req.user = decoded;     
        next();
    });
}


module.exports = isAuth