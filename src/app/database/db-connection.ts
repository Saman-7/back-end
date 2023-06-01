import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI!);
  if (mongoose.connection.readyState == 1) {
    console.log("Connected to db!");
  } else {
    console.log("Failed to connect to db!");
  }
};

module.exports = connectDB;
