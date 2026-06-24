import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },

  description: {
    type: String,
    required: [true, "Description is required"],
  },

  addedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "pending",
  },
  userId: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  }
});


export const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);
