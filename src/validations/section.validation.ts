import { z } from "zod";

export const sectionZodSchema = z.object({
    sectionName: z.string().max(500, "Section name must be at most 500 characters"),
    subSection: z.array(z.string()).optional(),
});

export type SectionInput = z.infer<typeof sectionZodSchema>;


