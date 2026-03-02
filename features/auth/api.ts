import { http } from "@/lib/api";

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
};
