import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authApi } from "./api";

export const authKeys = {
  me: ["auth", "me"],
};

export const useMe = () => {
  return useQuery({
    queryKey: authKeys.me,
    queryFn: async () => (await authApi.me()).data,
    retry: false,
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.login,

    onSuccess: () => {
      queryClient.fetchQuery({
        queryKey: authKeys.me,
        queryFn: async () => (await authApi.me()).data,
      });
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.logout,

    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: authKeys.me,
      });
    },
  });
};



