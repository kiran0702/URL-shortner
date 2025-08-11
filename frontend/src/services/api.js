import axios from "axios";

// Use the environment variable in production, or fallback to localhost in development
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API_URL + "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
