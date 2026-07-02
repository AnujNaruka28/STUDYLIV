import { z } from "zod";

export const courseZodSchema = z.object({
    courseName: z.string().min(1, "Course name is required"),
    courseDescription: z.string().optional(),
    duration: z.string().optional(),
    instructor: z.string().optional(), // Made optional since it's extracted from JWT token
    whatYouWillLearn: z.string().optional(),
    courseContent: z.array(z.string()).optional(),
    ratingAndReviews: z.array(z.string()).optional(),
    price: z.coerce.number().min(0, "Price must be greater than 0"), // Convert string to number
    thumbnail: z.string().optional(),
    tag: z.array(z.string()).optional(),
    category: z.string().min(1, "Category is required"),
    studentsEnrolled: z.array(z.string()).optional(),
});

export type CourseInput = z.infer<typeof courseZodSchema>;


