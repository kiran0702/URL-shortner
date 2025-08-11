// backend/controllers/adminController.js
// Handles admin listing of all URLs
const Url = require("../models/Url");

// GET /api/admin
exports.getAllUrls = async (req, res, next) => {
  try {
    const urls = await Url.find().sort({ createdAt: -1 });
    res.json(urls);
  } catch (err) {
    next(err);
  }
};
