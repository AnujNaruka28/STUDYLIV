"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUserRating = exports.calcAvgRating = exports.getAllRatings = exports.createRating = void 0;
const mongoose_1 = require("mongoose");
const RatingAndReview_1 = __importDefault(require("../models/RatingAndReview"));
const createRating = async (ratingAndReviewInput) => {
    return await RatingAndReview_1.default.create(ratingAndReviewInput);
};
exports.createRating = createRating;
const verifyUserRating = async (courseId, userId) => {
    return await RatingAndReview_1.default.findOne({
        course: courseId,
        user: userId
    });
};
exports.verifyUserRating = verifyUserRating;
const calcAvgRating = async (courseId) => {
    const result = await RatingAndReview_1.default.aggregate([
        {
            $match: {
                course: new mongoose_1.Types.ObjectId(courseId)
            }
        },
        {
            $group: {
                _id: null,
                avgRating: {
                    $avg: '$rating'
                }
            }
        }
    ]);
    return result[0].avgRating;
};
exports.calcAvgRating = calcAvgRating;
const getAllRatings = async (courseId = null) => {
    return await RatingAndReview_1.default.find({
        course: courseId
    }, {
        rating: true,
        review: true,
        user: true,
        course: true
    })
        .populate({
        path: "user",
        select: "firstName lastName email profileImage"
    })
        .populate({
        path: "course",
        select: "courseName"
    })
        .sort({ rating: "desc" })
        .exec();
};
exports.getAllRatings = getAllRatings;
//# sourceMappingURL=rating.service.js.map