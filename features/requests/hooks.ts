import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { requestsApi } from "./api";

export const collabRequestKeys = {
  collab_request: ["collab-request"],
};

export const useCollabRequest = () => {
  return useQuery({
    queryKey: collabRequestKeys.collab_request,
    queryFn: async () => {
      const response = await requestsApi.getAll();
      return response.data.data;
    },
  });
};
