"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagZodSchema = void 0;
const zod_1 = require("zod");
exports.tagZodSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Tag name is required"),
    description: zod_1.z.string().optional(),
    courses: zod_1.z.array(zod_1.z.string()).optional(),
});
//# sourceMappingURL=tag.validation.js.map