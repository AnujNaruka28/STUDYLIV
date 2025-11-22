import { IRatingAndReview } from "../models/RatingAndReview";
import { RatingAndReviewInput } from "../validations/rating.validation";
declare const createRating: (ratingAndReviewInput: RatingAndReviewInput) => Promise<IRatingAndReview | null>;
declare const verifyUserRating: (courseId: string, userId: string) => Promise<boolean | null>;
declare const calcAvgRating: (courseId: string) => Promise<number>;
declare const getAllRatings: (courseId?: string | null) => Promise<IRatingAndReview[]>;
export { createRating, getAllRatings, calcAvgRating, verifyUserRating };
//# sourceMappingURL=rating.service.d.ts.map