import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordTokenExpiry: Date,
    verificationToken: String,
    verificationTokenExpiryAt: Date,
  },
  { timestamps: true }
);

// creatat and updatat fields will be automatically added into the document, with timestamps true

export const User = mongoose.model("User", userSchema);
