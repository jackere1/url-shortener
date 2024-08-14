import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    originalURL: { type: String, required: true },
    shortURL: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
    visitCount: { type: Number, default: 0 },
  },
  { timestamps: true }
).index({ shortURL: 1 });

const shortUrlModel = mongoose.model("ShortURL", schema, "shortenedURLs");
export { shortUrlModel };
