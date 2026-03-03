import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { requestsApi } from "./api";

export const collabRequestKeys = {
  collab_request: ["collab-request"],
};

export const useGetAllCollabRequest = () => {
  return useQuery({
    queryKey: collabRequestKeys.collab_request,
    queryFn: async () => {
      const response = await requestsApi.getAll();
      return response.data.data;
    },
  });
};

export const useGetByIdCollabRequest = (id: number) => {
  return useQuery({
    queryKey: [collabRequestKeys.collab_request, id],
    queryFn: async () => {
      const response = await requestsApi.getById(id);
      return response.data.data;
    },
  });
};


export const useGetAttachmentCollabRequest = (
  id: number,
  options?: UseQueryOptions<any, unknown, any, readonly unknown[]>
) => {
  return useQuery({
    queryKey: [collabRequestKeys.collab_request, "attachment", id],
    queryFn: async () => {
      const response = await requestsApi.getAttachment(id);
      return response.data.data;
    },
    enabled: false
  });
};
