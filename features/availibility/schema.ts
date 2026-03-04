import z from "zod";
import { Contract, JobType } from "../auth/types";

export const availibilitySchema = z.object({
    acceptJob: z.boolean(),
    jobContract: z.enum([Contract.FULL_TIME, Contract.FREELANCE, Contract.ALL]),
    jobType: z.enum([JobType.ALL, JobType.ONSITE, JobType.REMOTE]),
    jobLocation: z.string().min(1, "Job location is required"),
});