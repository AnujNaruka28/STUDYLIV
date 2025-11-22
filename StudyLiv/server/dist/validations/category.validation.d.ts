import { z } from "zod";
export declare const categoryZodSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    courses: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type CategoryInput = z.infer<typeof categoryZodSchema>;
//# sourceMappingURL=category.validation.d.ts.map