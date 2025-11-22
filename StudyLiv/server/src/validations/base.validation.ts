import { z } from "zod";

// Base schema with common fields
export const baseUserZodSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.email("Invalid email address"),
    phoneNumber: z.string().length(10, "Phone number must be 10 digits"),
});

export type BaseUserInput = z.infer<typeof baseUserZodSchema>;