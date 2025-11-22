import { z } from "zod";

export const categoryZodSchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().optional(),
    courses: z.array(z.string()).optional(),
});

export type CategoryInput = z.infer<typeof categoryZodSchema>;
