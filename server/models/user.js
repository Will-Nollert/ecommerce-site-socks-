import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    id: { type: String },
    name: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      //required: true,
      unique: true,
    },
    password: {
      type: String,
      //required: true,
    },
    isAdmin: {
      type: Boolean,
      //required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("user", userSchema);

export default user;
