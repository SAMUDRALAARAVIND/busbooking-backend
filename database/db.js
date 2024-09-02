const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        console.log("Mongoose Connect Successfully");
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { connectDb };
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmQ0NzUyYmQwMzQwMGY5OTA2MDZhMTEiLCJlbWFpbCI6InlhZGF2YW5qYWxpMTQwNDE5OThAZ21haWwuY29tIiwiaWF0IjoxNzI1MjYzMjM1LCJleHAiOjE3MjUzNDk2MzV9.wBTBlZT9M-gpXMoPASM3M1mtSvI8Z9PERctVOnvGMM4