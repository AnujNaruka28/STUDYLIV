import { z } from "zod";
export declare const courseZodSchema: z.ZodObject<{
    courseName: z.ZodString;
    courseDescription: z.ZodOptional<z.ZodString>;
    instructor: z.ZodString;
    whatYouWillLearn: z.ZodOptional<z.ZodString>;
    courseContent: z.ZodOptional<z.ZodArray<z.ZodString>>;
    ratingAndReviews: z.ZodOptional<z.ZodArray<z.ZodString>>;
    price: z.ZodNumber;
    thumbnail: z.ZodOptional<z.ZodString>;
    tag: z.ZodOptional<z.ZodArray<z.ZodString>>;
    category: z.ZodString;
    studentsEnrolled: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type CourseInput = z.infer<typeof courseZodSchema>;
//# sourceMappingURL=course.validation.d.ts.map