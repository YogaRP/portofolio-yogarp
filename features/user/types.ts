import { Availibility } from "../availibility/types";

export interface User {
    id: number;
    uuid: string;
    email: string;
    password?: string;
    username: string;
    github: string;
    linkedin: string;
    phone: string;
    location: string;
    responseTime: string;
    role: "ADMIN" | "USER";
    createdAt: string;
    updatedAt: string;
    availibilities?: Availibility;
}
