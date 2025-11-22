"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileZodSchema = void 0;
const zod_1 = require("zod");
exports.profileZodSchema = zod_1.z.object({
    userName: zod_1.z.string(),
    profession: zod_1.z.string().optional(),
    dateOfBirth: zod_1.z.date().optional(),
    gender: zod_1.z.enum(["male", "female", "other"]),
    about: zod_1.z.string().max(500).optional(),
});
//# sourceMappingURL=profile.validation.js.map