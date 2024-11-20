import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/TiffinWala1').then(()=>console.log("DataBase Connected"));
}