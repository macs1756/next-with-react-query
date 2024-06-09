import { DomainBackend, PrimaryToken } from "@/consts";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: DomainBackend + '/api', 
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (PrimaryToken) {
      config.headers.Authorization = `Bearer ${PrimaryToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
