"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_1 = require("../middlewares/validate");
const rating_validation_1 = require("../validations/rating.validation");
const RatingAndReview_1 = require("../controllers/RatingAndReview");
const params_validation_1 = require("../validations/params.validation");
const auth_1 = require("../middlewares/auth");
const ratingRouter = (0, express_1.Router)();
ratingRouter.post('/review/:courseId', auth_1.auth, auth_1.isStudent, (0, validate_1.validate)({ body: rating_validation_1.ratingAndReviewZodSchema }), RatingAndReview_1.createRatingAndReview);
ratingRouter.get('/ratings/:courseId', (0, validate_1.validate)({ params: params_validation_1.courseIdParamsSchema }), RatingAndReview_1.getAvgRating);
ratingRouter.get('/reviews/:courseId', (0, validate_1.validate)({ params: params_validation_1.courseIdParamsSchema }), RatingAndReview_1.courseRatings);
ratingRouter.get('/reviews', RatingAndReview_1.allRatings);
exports.default = ratingRouter;
//# sourceMappingURL=ratings.routes.js.map