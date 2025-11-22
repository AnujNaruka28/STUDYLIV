import { z } from "zod";
export declare const idParamsSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export declare const courseIdParamsSchema: z.ZodObject<{
    courseId: z.ZodString;
}, z.core.$strip>;
export declare const sectionIdParamsSchema: z.ZodObject<{
    sectionId: z.ZodString;
}, z.core.$strip>;
export declare const subsectionIdParamsSchema: z.ZodObject<{
    subsectionId: z.ZodString;
}, z.core.$strip>;
export declare const categoryIdParamsSchema: z.ZodObject<{
    categoryId: z.ZodString;
}, z.core.$strip>;
export declare const tagIdParamsSchema: z.ZodObject<{
    tagId: z.ZodString;
}, z.core.$strip>;
export declare const userIdParamsSchema: z.ZodObject<{
    userId: z.ZodString;
}, z.core.$strip>;
export declare const tokenParamsSchema: z.ZodObject<{
    token: z.ZodString;
}, z.core.$strip>;
export declare const courseSectionParamsSchema: z.ZodObject<{
    courseId: z.ZodString;
    sectionId: z.ZodString;
}, z.core.$strip>;
export declare const courseVideoParamsSchema: z.ZodObject<{
    id: z.ZodString;
    videoId: z.ZodString;
}, z.core.$strip>;
export declare const paginationQuerySchema: z.ZodObject<{
    page: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<number, string | undefined>>;
    limit: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<number, string | undefined>>;
    sortBy: z.ZodOptional<z.ZodString>;
    sortOrder: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>>;
}, z.core.$strip>;
export declare const searchQuerySchema: z.ZodObject<{
    search: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodString>;
    priceMin: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<number | undefined, string | undefined>>;
    priceMax: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<number | undefined, string | undefined>>;
}, z.core.$strip>;
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
//# sourceMappingURL=params.validation.d.ts.map