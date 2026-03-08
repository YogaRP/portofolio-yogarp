import { useMutation, useQuery, useQueryClient, UseQueryOptions } from "@tanstack/react-query";
import { requestsApi } from "./api";
import { Request } from "@/lib/types";

export const collabRequestKeys = {
  collab_request: ["collab-request"],
};

export const useCreateCollabRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<Request>) => requestsApi.createCollabRequest(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: collabRequestKeys.collab_request,
      });
    },
  });
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
