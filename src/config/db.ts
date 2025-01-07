
import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {

    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI is not set");
    }
    await mongoose.connect(MONGODB_URI, {

    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
