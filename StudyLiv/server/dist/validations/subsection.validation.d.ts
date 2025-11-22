import { z } from "zod";
export declare const subSectionZodSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    duration: z.ZodString;
    videoUrl: z.ZodString;
    contentType: z.ZodOptional<z.ZodEnum<{
        video: "video";
        live: "live";
        instructor_questions: "instructor_questions";
    }>>;
    practicetitle: z.ZodOptional<z.ZodString>;
    questions: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type SubSectionInput = z.infer<typeof subSectionZodSchema>;
//# sourceMappingURL=subsection.validation.d.ts.map