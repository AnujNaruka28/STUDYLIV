"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.otpZodSchema = void 0;
const zod_1 = require("zod");
exports.otpZodSchema = zod_1.z.object({
    email: zod_1.z.email("Invalid email address"),
    otp: zod_1.z.string().min(1, "OTP is required"),
    createdAt: zod_1.z.date().optional()
});
//# sourceMappingURL=otp.validation.js.map