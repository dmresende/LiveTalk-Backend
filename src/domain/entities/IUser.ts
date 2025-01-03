import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  user: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  photo?: string;
}
