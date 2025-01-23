import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export const Message =
  mongoose.models["Message"] || mongoose.model("Message", messageSchema);
