import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
  timeout: 5000,
  // withCredentials: false,
});

export default api;
