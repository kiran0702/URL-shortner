import axios from "axios";

// Use the configured API in production, or the current site for same-origin deployments.
export const API_URL = (
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD ? window.location.origin : "http://localhost:5000")
).replace(/\/$/, "");

const api = axios.create({
  baseURL: API_URL + "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
