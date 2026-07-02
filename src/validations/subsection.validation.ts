import { z } from "zod";

export const subSectionZodSchema = z.object({
    title: z.string().max(500, "Title must be at most 500 characters"),
    description: z.string().max(500, "Description must be at most 500 characters"),
    duration: z.string(),
    videoUrl: z.string().optional(),
    contentType: z.enum(['live', 'video', 'instructor_questions']).optional(),
    practicetitle: z.string().optional(),
    questions: z.array(z.string()).optional(),
    sectionId: z.string().optional(),
});

export type SubSectionInput = z.infer<typeof subSectionZodSchema>;


