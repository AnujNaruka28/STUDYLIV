import { z } from "zod";
export declare const tagZodSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    courses: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type TagInput = z.infer<typeof tagZodSchema>;
//# sourceMappingURL=tag.validation.d.ts.map