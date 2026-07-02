import { z } from "zod";

export const otpZodSchema = z.object({
    email: z.email("Invalid email address"),
    otp: z.string().min(1, "OTP is required"),
    createdAt: z.date().optional()
});

export type OtpInput = z.infer<typeof otpZodSchema>;


