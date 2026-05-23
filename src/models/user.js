import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: [true, "password is required"],
  },

  profileImage: String,
  about: String,
});

export const User = mongoose.model.User || mongoose.model("User", userSchema);
