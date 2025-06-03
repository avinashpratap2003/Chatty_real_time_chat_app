import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chatty-real-time-chat-app-5qny.onrender.com/" : "/api",
  withCredentials: true,
});
