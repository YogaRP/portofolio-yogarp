import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authApi } from "./api";
import { User, Availibility } from "./types";

export const authKeys = {
  me: ["auth", "me"],
  availibility: ["auth", "availibility"],
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

export const useUpdateProfile = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<User>) => authApi.updateProfile(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: authKeys.me,
      });
    },
  });
};

export const useGetAvailibility = () => {
  return useQuery({
    queryKey: authKeys.availibility,
    queryFn: async () => (await authApi.getAvailibility()).data,
    retry: false,
  });
};

export const useUpdateAvailibility = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<Availibility>) =>
      authApi.updateAvailibility(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: authKeys.availibility,
      });
      queryClient.invalidateQueries({
        queryKey: authKeys.me,
      });
    },
  });
};
