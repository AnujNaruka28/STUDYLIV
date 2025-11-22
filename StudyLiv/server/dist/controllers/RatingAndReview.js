"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRatings = exports.allRatings = exports.getAvgRating = exports.createRatingAndReview = void 0;
const response_1 = require("../utils/response");
const course_service_1 = require("../services/course.service");
const rating_service_1 = require("../services/rating.service");
const createRatingAndReview = async (req, res) => {
    try {
        const { rating, review } = req.body;
        if (!rating || !review) {
            return (0, response_1.validationError)(res, [{
                    field: 'rating or review',
                    message: 'Rating or review is required'
                }]);
        }
        const userId = req.user?.id;
        if (!userId) {
            return (0, response_1.validationError)(res, [{
                    field: 'userId',
                    message: 'User not found'
                }]);
        }
        const courseId = req.params.courseId;
        if (!courseId) {
            return (0, response_1.validationError)(res, [{
                    field: 'courseId',
                    message: 'Course not found'
                }]);
        }
        const courseDetails = await (0, course_service_1.findCourseById)(courseId);
        if (!courseDetails) {
            return (0, response_1.validationError)(res, [{
                    field: 'courseId',
                    message: 'Course not found'
                }]);
        }
        const isEnrolled = await (0, course_service_1.verifyStudentEnrolled)(courseId, userId);
        if (!isEnrolled) {
            return (0, response_1.validationError)(res, [{
                    field: 'userId',
                    message: 'User not enrolled in the course'
                }]);
        }
        const isRated = await (0, rating_service_1.verifyUserRating)(courseId, userId);
        if (isRated) {
            return (0, response_1.validationError)(res, [{
                    field: 'userId',
                    message: 'User already rated the course'
                }]);
        }
        const ratingDetails = await (0, rating_service_1.createRating)({
            rating,
            review,
            user: userId,
            course: courseId
        });
        const updatedCourse = await (0, course_service_1.addRatingToCourse)(ratingDetails, courseId);
        if (!updatedCourse) {
            return (0, response_1.error)(res, 'Failed to update course with rating', 500);
        }
        return (0, response_1.success)(res, ratingDetails, 'Rating and review created successfully', 201);
    }
    catch (err) {
        return (0, response_1.error)(res, err.message || 'Failed to create Rating', 500);
    }
};
exports.createRatingAndReview = createRatingAndReview;
const getAvgRating = async (req, res) => {
    try {
        const courseId = req.params.courseId;
        if (!courseId) {
            return (0, response_1.validationError)(res, [{
                    field: 'courseId',
                    message: 'Course Id not found'
                }]);
        }
        const courseDetails = await (0, course_service_1.findCourseById)(courseId);
        if (!courseDetails) {
            return (0, response_1.validationError)(res, [{
                    field: 'courseId',
                    message: 'Course not found'
                }]);
        }
        const avgRating = await (0, rating_service_1.calcAvgRating)(courseId);
        if (!avgRating) {
            return (0, response_1.validationError)(res, [{
                    field: 'courseId',
                    message: 'No ratings found for the course'
                }]);
        }
        return (0, response_1.success)(res, avgRating, 'Average rating fetched successfully', 200);
    }
    catch (err) {
        return (0, response_1.error)(res, err.message || 'Failed to fetch average rating', 500);
    }
};
exports.getAvgRating = getAvgRating;
const allRatings = async (_req, res) => {
    try {
        const ratings = await (0, rating_service_1.getAllRatings)();
        return (0, response_1.success)(res, ratings, 'All ratings fetched successfully', 200);
    }
    catch (err) {
        return (0, response_1.error)(res, err.message || 'Failed to fetch all ratings', 500);
    }
};
exports.allRatings = allRatings;
const courseRatings = async (req, res) => {
    try {
        const courseId = req.params.courseId;
        if (!courseId) {
            return (0, response_1.validationError)(res, [{
                    field: 'courseId',
                    message: 'Course Id not found'
                }]);
        }
        const ratings = await (0, rating_service_1.getAllRatings)(courseId);
        if (!ratings) {
            return (0, response_1.validationError)(res, [{
                    field: 'courseId',
                    message: 'No ratings found for the course'
                }]);
        }
        return (0, response_1.success)(res, ratings, 'All ratings fetched successfully', 200);
    }
    catch (err) {
        return (0, response_1.error)(res, err.message || 'Failed to fetch all ratings', 500);
    }
};
exports.courseRatings = courseRatings;
//# sourceMappingURL=RatingAndReview.js.map