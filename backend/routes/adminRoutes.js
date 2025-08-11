// backend/routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const { getAllUrls } = require("../controllers/adminController");

// GET /api/admin
router.get("/", getAllUrls);

module.exports = router;
