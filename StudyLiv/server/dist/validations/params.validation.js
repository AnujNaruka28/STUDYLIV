"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchQuerySchema = exports.paginationQuerySchema = exports.courseVideoParamsSchema = exports.courseSectionParamsSchema = exports.tokenParamsSchema = exports.userIdParamsSchema = exports.tagIdParamsSchema = exports.categoryIdParamsSchema = exports.subsectionIdParamsSchema = exports.sectionIdParamsSchema = exports.courseIdParamsSchema = exports.idParamsSchema = void 0;
const zod_1 = require("zod");
// Common parameter validation schemas
exports.idParamsSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, "ID is required")
});
exports.courseIdParamsSchema = zod_1.z.object({
    courseId: zod_1.z.string().min(1, "Course ID is required")
});
exports.sectionIdParamsSchema = zod_1.z.object({
    sectionId: zod_1.z.string().min(1, "Section ID is required")
});
exports.subsectionIdParamsSchema = zod_1.z.object({
    subsectionId: zod_1.z.string().min(1, "Subsection ID is required")
});
exports.categoryIdParamsSchema = zod_1.z.object({
    categoryId: zod_1.z.string().min(1, "Category ID is required")
});
exports.tagIdParamsSchema = zod_1.z.object({
    tagId: zod_1.z.string().min(1, "Tag ID is required")
});
exports.userIdParamsSchema = zod_1.z.object({
    userId: zod_1.z.string().min(1, "User ID is required")
});
exports.tokenParamsSchema = zod_1.z.object({
    token: zod_1.z.string().min(1, "Token is required")
});
// Combined parameter schemas for complex routes
exports.courseSectionParamsSchema = zod_1.z.object({
    courseId: zod_1.z.string().min(1, "Course ID is required"),
    sectionId: zod_1.z.string().min(1, "Section ID is required")
});
exports.courseVideoParamsSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, "Course ID is required"),
    videoId: zod_1.z.string().min(1, "Video ID is required")
});
// Query parameter validation schemas
exports.paginationQuerySchema = zod_1.z.object({
    page: zod_1.z.string().optional().transform((val) => val ? parseInt(val) : 1),
    limit: zod_1.z.string().optional().transform((val) => val ? parseInt(val) : 10),
    sortBy: zod_1.z.string().optional(),
    sortOrder: zod_1.z.enum(['asc', 'desc']).optional().default('desc')
});
exports.searchQuerySchema = zod_1.z.object({
    search: zod_1.z.string().optional(),
    category: zod_1.z.string().optional(),
    priceMin: zod_1.z.string().optional().transform((val) => val ? parseFloat(val) : undefined),
    priceMax: zod_1.z.string().optional().transform((val) => val ? parseFloat(val) : undefined)
});
//# sourceMappingURL=params.validation.js.map