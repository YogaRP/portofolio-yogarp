import { http } from "@/lib/api";
import { User } from "./types";

export const userApi = {

    updateProfile: (id: number, data: Partial<User>) =>
        http.put(`/users/${id}`, data, {
            withCredentials: true,
        }),

    getMePublic: () =>
        http.get(`/users/public/me`),
};
