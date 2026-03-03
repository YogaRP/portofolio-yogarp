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

  getAttachment: (id: number) => {
    return http.get(`/collab-requests/${id}/attachment`);
  },

  delete: (id: number) => {
    return http.delete(`/collab-requests/${id}`);
  },
};
