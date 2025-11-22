"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sectionZodSchema = void 0;
const zod_1 = require("zod");
exports.sectionZodSchema = zod_1.z.object({
    sectionName: zod_1.z.string().max(500, "Section name must be at most 500 characters"),
    subSection: zod_1.z.array(zod_1.z.string()).optional(),
});
//# sourceMappingURL=section.validation.js.map