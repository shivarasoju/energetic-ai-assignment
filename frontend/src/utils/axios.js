import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://energetic-ai-assignment.onrender.com/api",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
