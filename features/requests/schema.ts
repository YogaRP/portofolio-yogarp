import z from "zod";

export const collabRequestSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.string().trim().email("Invalid email"),
    subject: z.string().trim().min(1, "Subject is required"),
    message: z.string().trim().min(20, "Minimum message is 20 character").max(500, "Maximum message is 500 character"),
    attachment: z
        .instanceof(File)
        .refine((file) => file.size <= 5 * 1024 * 1024, "Max file size is 5MB")
        .optional()
    // .refine(
    //   (file) =>
    //     ["image/png", "image/jpeg", "application/pdf"].includes(file.type),
    //   "Only PNG, JPG, or PDF allowed"
    // ),

});;


export type CollabRequestFormData = z.infer<typeof collabRequestSchema>