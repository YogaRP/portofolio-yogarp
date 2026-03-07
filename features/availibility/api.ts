import { http } from "@/lib/api";
import { Availibility } from "./types";

export const availibilityApi = {

    getAvailibility: () =>
        http.get("/availibilities"),

    updateAvailibility: (id: number, data: Partial<Availibility>) =>
        http.put(`/availibilities/update/${id}`, data, {
            withCredentials: true,
        }),
};
