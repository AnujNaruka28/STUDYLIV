import { z } from "zod";
export declare const baseUserZodSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodEmail;
    phoneNumber: z.ZodString;
}, z.core.$strip>;
export type BaseUserInput = z.infer<typeof baseUserZodSchema>;
//# sourceMappingURL=base.validation.d.ts.map