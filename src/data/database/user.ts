import mongoose, { Schema } from "mongoose";
import IUser from "../../domain/Entities/user";

const userSchema: Schema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { String },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", userSchema);
