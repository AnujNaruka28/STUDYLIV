import { z } from "zod";
import { baseUserZodSchema } from "./base.validation";

export const userZodSchema = baseUserZodSchema.extend({
    profileImage: z.string().min(1, "Profile image is required").optional(),
    password: z.string().min(1, "Password is required"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
    token: z.string().optional(),
    resetPasswordExpires: z.date().optional(),
    additionalDetails: z.string().min(1).optional(),
    accountType: z.enum(["Admin", "Student", "Instructor"]),
    courses: z.array(z.string()).optional(),
    courseProgress: z.array(z.object({
        courseId: z.string(),
        progress: z.array(z.string()).optional(),
    }).optional()).optional(),
    otp: z.string().optional()
});

// Schema specifically for change password operation
export const changePasswordZodSchema = z.object({
    email: z.email("Invalid email address"),
    oldPassword: z.string().min(1, "Old password is required"),
    newPassword: z.string().min(1, "New password is required"),
    confirmNewPassword: z.string().min(1, "Confirm new password is required")
});

export type UserInput = z.infer<typeof userZodSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordZodSchema>;


