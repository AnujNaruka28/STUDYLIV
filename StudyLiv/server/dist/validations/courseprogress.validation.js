"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseProgressZodSchema = void 0;
const zod_1 = require("zod");
exports.courseProgressZodSchema = zod_1.z.object({
    courseId: zod_1.z.string().min(1, "Course ID is required"),
    progress: zod_1.z.array(zod_1.z.string()).optional(),
});
//# sourceMappingURL=courseprogress.validation.js.map