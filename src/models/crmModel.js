import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const TaskSchema = new Schema({
  content: {
    type: String,
    required: "Task content is required",
  },
});
