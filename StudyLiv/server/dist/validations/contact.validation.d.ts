import { z } from 'zod';
export declare const contactZodSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodEmail;
    phoneNumber: z.ZodString;
    message: z.ZodString;
}, z.core.$strip>;
export type ContactInput = z.infer<typeof contactZodSchema>;
//# sourceMappingURL=contact.validation.d.ts.map