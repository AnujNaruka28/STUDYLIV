import { z } from "zod";
import dotenv from "dotenv";
dotenv.config();

// Note: z.url() does not accept non-HTTP schemes like mongodb+srv.
// Use string().min(1) for DATABASE_URL instead of z.url().
const envSchema = z.object({
    NODE_ENV: z.enum(["development","test","production"]).default("development"),
    PORT: z.coerce.number().int().positive().default(4000),
    DATABASE_URL: z.string().min(4, "DATABASE_URL is required"),
    JWT_SECRET: z.string().min(32, "JWT_SECRET is required"),
    RAZORPAY_ID: z.string().min(4, "RAZORPAY_ID is required"),
    RAZORPAY_SECRET: z.string().min(4, "RAZORPAY_SECRET is required"),
    RAZORPAY_WEBHOOK_SECRET: z.string().min(4, "RAZORPAY_WEBHOOK_SECRET is required"),
    FOLDER_NAME: z.string().min(1, "FOLDER_NAME is required"),
    CLOUDINARY_CLOUD_NAME: z.string().min(1, "CLOUDINARY_CLOUD_NAME is required"),
    CLOUDINARY_API_KEY: z.string().min(1, "CLOUDINARY_API_KEY is required"),
    CLOUDINARY_API_SECRET: z.string().min(1, "CLOUDINARY_API_SECRET is required"),
    MAIL_HOST: z.string().min(1, "MAIL_HOST is required"),
    MAIL_USER: z.string().min(1, "MAIL_USER is required"),
    MAIL_PASS: z.string().min(1, "MAIL_PASS is required"),
    FRONTEND_URL: z.url("FRONTEND_URL is required")
});

const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
    throw new Error(parsed.error.message);
}

export const ENV = parsed.data;
