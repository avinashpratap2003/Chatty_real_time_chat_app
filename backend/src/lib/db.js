import mongoose from "mongoose";
import dotenv from "dotenv";

// Explicitly set the path to your .env file
dotenv.config({ path: "./src/.env" });

export const connectDB = async () => {
  try {
    // console.log("MongoDB URI:", process.env.MONGODB_URI); // Debug log
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
