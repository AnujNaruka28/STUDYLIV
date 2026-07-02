import { z } from "zod";

export const profileZodSchema = z.object({
    userName: z.string(),
    profession: z.string().optional(),
    dateOfBirth: z.string().optional(),
    gender: z.enum(["male","female","other"]),
    about: z.string().max(500).optional(),
});

export type ProfileInput = z.infer<typeof profileZodSchema>;


