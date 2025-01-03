import mongoose, { Schema } from "mongoose";
import { IUser } from "../../domain/entities/IUser";

const userSchema: Schema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    user: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: mongoose.Schema.Types.Date, default: Date.now },
    updatedAt: { type: mongoose.Schema.Types.Date, default: Date.now },
    photo: { String },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", userSchema);

