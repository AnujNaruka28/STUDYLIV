import { z } from "zod";
export declare const otpZodSchema: z.ZodObject<{
    email: z.ZodEmail;
    otp: z.ZodString;
    createdAt: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export type OtpInput = z.infer<typeof otpZodSchema>;
//# sourceMappingURL=otp.validation.d.ts.map