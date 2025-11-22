import { z } from "zod";
export declare const courseProgressZodSchema: z.ZodObject<{
    courseId: z.ZodString;
    progress: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type CourseProgressInput = z.infer<typeof courseProgressZodSchema>;
//# sourceMappingURL=courseprogress.validation.d.ts.map