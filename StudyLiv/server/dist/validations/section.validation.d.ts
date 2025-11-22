import { z } from "zod";
export declare const sectionZodSchema: z.ZodObject<{
    sectionName: z.ZodString;
    subSection: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type SectionInput = z.infer<typeof sectionZodSchema>;
//# sourceMappingURL=section.validation.d.ts.map