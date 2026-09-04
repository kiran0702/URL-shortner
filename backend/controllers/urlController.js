// backend/controllers/urlController.js
// Handles URL shortening and redirection
const Url = require("../models/Url");
const { nanoid } = require("nanoid");
const validUrl = require("valid-url");

// Helper: Validate URL format
function isValidUrl(url) {
  return validUrl.isWebUri(url);
}

// POST /api/shorten
exports.shortenUrl = async (req, res, next) => {
  try {
    const { originalUrl } = req.body;
    if (!originalUrl || !isValidUrl(originalUrl)) {
      return res.status(400).json({ error: "Invalid URL format." });
    }
    // Generate unique shortCode
    let shortCode;
    let exists = true;
    while (exists) {
      shortCode = nanoid(7);
      exists = await Url.findOne({ shortCode });
    }
    const configuredBaseUrl = process.env.BASE_URL?.replace(/\/$/, "");
    const baseUrl =
      process.env.NODE_ENV === "production" &&
      (!configuredBaseUrl || configuredBaseUrl.includes("localhost"))
        ? `${req.protocol}://${req.get("host")}`
        : configuredBaseUrl;
    const url = new Url({ originalUrl, shortCode });
    await url.save();
    res.status(201).json({ shortUrl: `${baseUrl}/${shortCode}`, shortCode });
  } catch (err) {
    next(err);
  }
};

// GET /:shortcode
exports.redirectUrl = async (req, res, next) => {
  try {
    const { shortcode } = req.params;
    // Get the referer header, which contains the URL of the page that linked to the resource being requested
    const referrer = req.get("referer") || "";

    const url = await Url.findOneAndUpdate(
      { shortCode: shortcode },
      {
        $inc: { visitCount: 1 },
        $set: {
          lastVisitedAt: new Date(),
          referrer: referrer,
        },
      },
      { new: true }
    );
    if (url) {
      return res.redirect(302, url.originalUrl);
    } else {
      return res.status(404).json({ error: "Short URL not found." });
    }
  } catch (err) {
    next(err);
  }
};
