import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const TaskSchema = new Schema({
  id: {
    type: Number,
    required: "Id is required",
  },
  content: {
    type: String,
    required: "Task content is required",
  },
});
