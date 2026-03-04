import { http } from "@/lib/api";
import { User, Availibility } from "./types";

export const authApi = {
  login: (data: { email: string; password: string }) => {
    return http.post("/auth/login", data);
  },

  me: () =>
    http.get("/auth/me", {
      withCredentials: true,
    }),

  logout: () =>
    http.post("/auth/logout", {
      withCredentials: true,
    }),

  refresh: () =>
    http.post("/auth/refresh", {
      withCredentials: true,
    }),

  updateProfile: (id: number, data: Partial<User>) =>
    http.put(`/users/${id}`, data, {
      withCredentials: true,
    }),

  getAvailibility: () =>
    http.get("/availibilities", {
      withCredentials: true,
    }),

  updateAvailibility: (id: number, data: Partial<Availibility>) =>
    http.put(`/availibilities/update/${id}`, data, {
      withCredentials: true,
    }),
};
