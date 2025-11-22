"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subSectionZodSchema = void 0;
const zod_1 = require("zod");
exports.subSectionZodSchema = zod_1.z.object({
    title: zod_1.z.string().max(500, "Title must be at most 500 characters"),
    description: zod_1.z.string().max(500, "Description must be at most 500 characters"),
    duration: zod_1.z.string(),
    videoUrl: zod_1.z.string(),
    contentType: zod_1.z.enum(['live', 'video', 'instructor_questions']).optional(),
    practicetitle: zod_1.z.string().optional(),
    questions: zod_1.z.array(zod_1.z.string()).optional(),
});
//# sourceMappingURL=subsection.validation.js.map