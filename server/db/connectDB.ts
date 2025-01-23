import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionState = mongoose.connection.readyState;

    // Check if already connected (readyState 1 means connected)
    if (connectionState === 1) {
      console.log("MongoDB is already connected.");
      return;
    }

    const connect = await mongoose.connect(
      process.env?.DB_CONNECTION_URL || ""
    );
    console.log(`MongoDB connected: ${connect?.connection?.host}`);
  } catch (error: any) {
    console.error("Error connecting to MongoDB: ", error?.message)
    process.exit(1); // Exit the process with failure code
  }
};
