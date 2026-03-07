import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authKeys } from "../auth/hooks";
import { User } from "./types";
import { userApi } from "./api";

export const userKeys = {
    user: ["users"],
    user_me: ["users", "me"],
};

export const useUpdateProfile = (id: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: Partial<User>) => userApi.updateProfile(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: authKeys.me,
            });
        },
    });
};

export const useGetMePublic = () => {
    return useQuery({
        queryKey: userKeys.user_me,
        queryFn: async () => ((await userApi.getMePublic()).data),
        retry: false,
    });
};


