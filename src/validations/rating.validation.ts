import { z } from "zod";

export const ratingAndReviewZodSchema = z.object({
    user: z.string().min(1, "User is required"),
    review: z.string().min(1, "Review is required"),
    rating: z.number().min(1, "Rating must be at least 1").max(5, "Rating cannot be more than 5"),
    course: z.string().min(1, "Course is required")
});

export type RatingAndReviewInput = z.infer<typeof ratingAndReviewZodSchema>;


