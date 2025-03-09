import axios from "axios";
import { API_PATH } from "./constants";

export const axiosInstance = axios.create({
  baseURL: API_PATH,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
