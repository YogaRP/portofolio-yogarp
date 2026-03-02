import { http } from "@/lib/api";
import { Request } from "@/lib/types";

export const requestsApi = {
  getAll: () => {
    return http.get<{ data: Request[] }>("/collab-requests", {
      withCredentials: true,
    });
  },

  getById: (id: number) => {
    return http.get<{ data: Request }>(`/collab-requests/${id}`);
  },

  delete: (id: number) => {
    return http.delete(`/collab-requests/${id}`);
  },
};
