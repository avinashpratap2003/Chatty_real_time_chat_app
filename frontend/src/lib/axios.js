import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "https://chatty-real-time-chat-app-5qny.onrender.com/api",
  withCredentials: true,
});
