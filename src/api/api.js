import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:5000/api",
});

export const fetchStats = () => API.get("/stats").then((r) => r.data);
export const fetchPrices = (q) =>
  API.get("/price", { params: q }).then((r) => r.data);
export const fetchBlocks = () => API.get("/block").then((r) => r.data);

export default API;
