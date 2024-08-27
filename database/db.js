import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        console.log("Mongoose Connect Successfully");
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.log(error);
    }
};
