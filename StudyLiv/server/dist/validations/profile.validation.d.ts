import { z } from "zod";
export declare const profileZodSchema: z.ZodObject<{
    userName: z.ZodString;
    profession: z.ZodOptional<z.ZodString>;
    dateOfBirth: z.ZodOptional<z.ZodDate>;
    gender: z.ZodEnum<{
        male: "male";
        female: "female";
        other: "other";
    }>;
    about: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ProfileInput = z.infer<typeof profileZodSchema>;
//# sourceMappingURL=profile.validation.d.ts.map