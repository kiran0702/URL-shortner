// backend/models/Url.js
// Mongoose schema for shortened URLs
const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortCode: { type: String, required: true, unique: true },
  visitCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  lastVisitedAt: { type: Date, default: null }, // Bonus: track last visit
  referrer: { type: String, default: "" }, // Bonus: track referrer
});

module.exports = mongoose.model("Url", UrlSchema);
