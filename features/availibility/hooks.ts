import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Availibility } from "./types";
import { availibilityApi } from "./api";
import { authKeys } from "../auth/hooks";

export const availKeys = {
    availibility: ["auth", "availibility"],
};

export const useGetAvailibility = () => {
    return useQuery({
        queryKey: availKeys.availibility,
        queryFn: async () => (await availibilityApi.getAvailibility()).data,
        retry: false,
    });
};

export const useUpdateAvailibility = (id: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: Partial<Availibility>) =>
            availibilityApi.updateAvailibility(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: availKeys.availibility,
            });
            queryClient.invalidateQueries({
                queryKey: authKeys.me,
            });
        },
    });
};