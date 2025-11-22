"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseUserZodSchema = void 0;
const zod_1 = require("zod");
// Base schema with common fields
exports.baseUserZodSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1, "First name is required"),
    lastName: zod_1.z.string().min(1, "Last name is required"),
    email: zod_1.z.email("Invalid email address"),
    phoneNumber: zod_1.z.string().length(10, "Phone number must be 10 digits"),
});
//# sourceMappingURL=base.validation.js.map