import { Router } from "express";
import { validate } from "../middlewares/validate";
import { ratingAndReviewZodSchema } from "../validations/rating.validation";
import { allRatings, courseRatings, createRatingAndReview, getAvgRating } from "../controllers/RatingAndReview";
import { courseIdParamsSchema } from "../validations/params.validation";
import { auth, isStudent } from "../middlewares/auth";

const ratingRouter = Router();

ratingRouter.post('/review/:courseId',auth,isStudent,validate({body: ratingAndReviewZodSchema}),createRatingAndReview);
ratingRouter.get('/ratings/:courseId',validate({params: courseIdParamsSchema}),getAvgRating);
ratingRouter.get('/reviews/:courseId',validate({params: courseIdParamsSchema}),courseRatings);
ratingRouter.get('/reviews',allRatings);

export default ratingRouter;