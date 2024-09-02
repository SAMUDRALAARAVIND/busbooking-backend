const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

const authenticateUser = async (req, res, next) => {
    
    const authHeader = req.headers.authorization;
    

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Authentication token missing or invalid" });
    }

    const token  = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("token mai se id",decoded.userId);
        req.user = await userModel.findById(decoded.userId).select('-password');

        if (!req.user) {
            return res.status(401).json({ message: "User not found" });
        }

        next();
    } catch (error) {
        res.status(401).json({ message: "Token is not valid" });
    }
}

module.exports = authenticateUser;