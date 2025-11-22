import { z } from "zod";

// Common parameter validation schemas
export const idParamsSchema = z.object({
    id: z.string().min(1, "ID is required")
});

export const courseIdParamsSchema = z.object({
    courseId: z.string().min(1, "Course ID is required")
});

export const sectionIdParamsSchema = z.object({
    sectionId: z.string().min(1, "Section ID is required")
});

export const subsectionIdParamsSchema = z.object({
    subsectionId: z.string().min(1, "Subsection ID is required")
});

export const categoryIdParamsSchema = z.object({
    categoryId: z.string().min(1, "Category ID is required")
});

export const tagIdParamsSchema = z.object({
    tagId: z.string().min(1, "Tag ID is required")
});

export const userIdParamsSchema = z.object({
    userId: z.string().min(1, "User ID is required")
});

export const tokenParamsSchema = z.object({
    token: z.string().min(1, "Token is required")
});

// Combined parameter schemas for complex routes
export const courseSectionParamsSchema = z.object({
    courseId: z.string().min(1, "Course ID is required"),
    sectionId: z.string().min(1, "Section ID is required")
});

export const courseVideoParamsSchema = z.object({
    id: z.string().min(1, "Course ID is required"),
    videoId: z.string().min(1, "Video ID is required")
});

// Query parameter validation schemas
export const paginationQuerySchema = z.object({
    page: z.string().optional().transform((val) => val ? parseInt(val) : 1),
    limit: z.string().optional().transform((val) => val ? parseInt(val) : 10),
    sortBy: z.string().optional(),
    sortOrder: z.enum(['asc', 'desc']).optional().default('desc')
});

export const searchQuerySchema = z.object({
    search: z.string().optional(),
    category: z.string().optional(),
    priceMin: z.string().optional().transform((val) => val ? parseFloat(val) : undefined),
    priceMax: z.string().optional().transform((val) => val ? parseFloat(val) : undefined)
});

export type IdParams = z.infer<typeof idParamsSchema>;
export type CourseIdParams = z.infer<typeof courseIdParamsSchema>;
export type SectionIdParams = z.infer<typeof sectionIdParamsSchema>;
export type SubsectionIdParams = z.infer<typeof subsectionIdParamsSchema>;
export type CategoryIdParams = z.infer<typeof categoryIdParamsSchema>;
export type TagIdParams = z.infer<typeof tagIdParamsSchema>;
export type UserIdParams = z.infer<typeof userIdParamsSchema>;
export type TokenParams = z.infer<typeof tokenParamsSchema>;
export type CourseSectionParams = z.infer<typeof courseSectionParamsSchema>;
export type CourseVideoParams = z.infer<typeof courseVideoParamsSchema>;
export type PaginationQuery = z.infer<typeof paginationQuerySchema>;
export type SearchQuery = z.infer<typeof searchQuerySchema>;
