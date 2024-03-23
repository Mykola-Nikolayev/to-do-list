import mongoose from "mongoose";

export interface IMessage {
  _id: string;
  message: string;
  author: string;
  userId: string;
  createAt: Date;
  updateAt: Date;
}
const MessageSchema = new mongoose.Schema<IMessage>(
  {
    message: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const MessageModel = mongoose.model("message", MessageSchema);
