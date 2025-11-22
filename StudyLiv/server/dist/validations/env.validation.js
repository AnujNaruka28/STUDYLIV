"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = void 0;
const zod_1 = require("zod");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Note: z.url() does not accept non-HTTP schemes like mongodb+srv.
// Use string().min(1) for DATABASE_URL instead of z.url().
const envSchema = zod_1.z.object({
    NODE_ENV: zod_1.z.enum(["development", "test", "production"]).default("development"),
    PORT: zod_1.z.coerce.number().int().positive().default(4000),
    DATABASE_URL: zod_1.z.string().min(1, "DATABASE_URL is required"),
    JWT_SECRET: zod_1.z.string().min(1, "JWT_SECRET is required"),
    RAZORPAY_ID: zod_1.z.string().min(1, "RAZORPAY_ID is required"),
    RAZORPAY_SECRET: zod_1.z.string().min(1, "RAZORPAY_SECRET is required"),
    FOLDER_NAME: zod_1.z.string().min(1, "FOLDER_NAME is required"),
    CLOUDINARY_CLOUD_NAME: zod_1.z.string().min(1, "CLOUDINARY_CLOUD_NAME is required"),
    CLOUDINARY_API_KEY: zod_1.z.string().min(1, "CLOUDINARY_API_KEY is required"),
    CLOUDINARY_API_SECRET: zod_1.z.string().min(1, "CLOUDINARY_API_SECRET is required"),
    CORS_ORIGIN: zod_1.z.string().optional(),
    MAIL_HOST: zod_1.z.string().min(1, "MAIL_HOST is required"),
    MAIL_USER: zod_1.z.string().min(1, "MAIL_USER is required"),
    MAIL_PASS: zod_1.z.string().min(1, "MAIL_PASS is required"),
    FRONTEND_URL: zod_1.z.url("FRONTEND_URL is required")
});
const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
    throw new Error(parsed.error.message);
}
exports.ENV = parsed.data;
//# sourceMappingURL=env.validation.js.map