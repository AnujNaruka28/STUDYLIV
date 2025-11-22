import { z } from "zod";

export const tagZodSchema = z.object({
    name: z.string().min(1, "Tag name is required"),
    description: z.string().optional(),
    courses: z.array(z.string()).optional(),
});

export type TagInput = z.infer<typeof tagZodSchema>;


