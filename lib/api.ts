import { authApi } from "@/features/auth/api";
import axios from "axios";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true,
});

http.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    // If refresh endpoint itself fails → logout immediately
    if (originalRequest.url.includes("/auth/refresh")) {
      window.location.href = "/auth/login-admin";
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      error.response.data.message !== "Invalid email or password" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        await authApi.refresh();
        return http(originalRequest);
      } catch (error) {
        window.location.href = "/auth/login-admin";
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);
