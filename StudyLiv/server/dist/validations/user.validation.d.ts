import { z } from "zod";
export declare const userZodSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodEmail;
    phoneNumber: z.ZodString;
    profileImage: z.ZodOptional<z.ZodString>;
    password: z.ZodString;
    confirmPassword: z.ZodString;
    token: z.ZodOptional<z.ZodString>;
    resetPasswordExpires: z.ZodOptional<z.ZodDate>;
    additionalDetails: z.ZodOptional<z.ZodString>;
    accountType: z.ZodEnum<{
        Admin: "Admin";
        Student: "Student";
        Instructor: "Instructor";
    }>;
    courses: z.ZodOptional<z.ZodArray<z.ZodString>>;
    courseProgress: z.ZodOptional<z.ZodArray<z.ZodString>>;
    otp: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UserInput = z.infer<typeof userZodSchema>;
//# sourceMappingURL=user.validation.d.ts.map