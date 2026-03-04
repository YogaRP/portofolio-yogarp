import z from "zod";

export const profileSchema = z.object({
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(1, "Phone is required"),
    location: z.string().min(1, "Location is required"),
    responseTime: z.string().min(1, "Response time is required"),
    github: z.string().url("Invalid GitHub URL").optional().or(z.literal("")),
    linkedin: z.string().url("Invalid LinkedIn URL").optional().or(z.literal("")),
});