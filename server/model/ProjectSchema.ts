import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["project", "work"], // Assuming "project" and "work" are the only allowed types
  },
  color: {
    type: String,
    required: true,
  },
  client: {
    type: String,
    required: true,
  },
  work: {
    type: [String],
    required: true,
  },
  story: {
    type: [String],
    required: true,
  },
  day: {
    type: [String],
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
});

export const Project =
  mongoose.models["Project"] || mongoose.model("Project", projectSchema);
