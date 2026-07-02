import { z } from "zod";

export const courseProgressZodSchema = z.object({
    courseId: z.string().min(1, "Course ID is required"),
    progress: z.array(z.string()).optional(),
});

export type CourseProgressInput = z.infer<typeof courseProgressZodSchema>;


