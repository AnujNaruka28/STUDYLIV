"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userZodSchema = void 0;
const zod_1 = require("zod");
const base_validation_1 = require("./base.validation");
exports.userZodSchema = base_validation_1.baseUserZodSchema.extend({
    profileImage: zod_1.z.string().min(1, "Profile image is required").optional(),
    password: zod_1.z.string().min(1, "Password is required"),
    confirmPassword: zod_1.z.string().min(1, "Confirm password is required"),
    token: zod_1.z.string().optional(),
    resetPasswordExpires: zod_1.z.date().optional(),
    additionalDetails: zod_1.z.string().min(1).optional(),
    accountType: zod_1.z.enum(["Admin", "Student", "Instructor"]),
    courses: zod_1.z.array(zod_1.z.string()).optional(),
    courseProgress: zod_1.z.array(zod_1.z.string()).optional(),
    otp: zod_1.z.string().optional()
});
//# sourceMappingURL=user.validation.js.map