import { z } from "zod";
export declare const ratingAndReviewZodSchema: z.ZodObject<{
    user: z.ZodString;
    review: z.ZodString;
    rating: z.ZodNumber;
    course: z.ZodString;
}, z.core.$strip>;
export type RatingAndReviewInput = z.infer<typeof ratingAndReviewZodSchema>;
//# sourceMappingURL=rating.validation.d.ts.map