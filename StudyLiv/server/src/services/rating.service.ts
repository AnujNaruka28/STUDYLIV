import { Types } from "mongoose";
import RatingAndReview, { IRatingAndReview } from "../models/RatingAndReview";
import { RatingAndReviewInput } from "../validations/rating.validation";

const createRating = async (ratingAndReviewInput: RatingAndReviewInput): Promise<IRatingAndReview | null> => {
    return await RatingAndReview.create(ratingAndReviewInput);
}
const verifyUserRating = async (courseId: string, userId: string): Promise<boolean | null> => {
    return await RatingAndReview.findOne({
        course: courseId,
        user: userId
    });
}
const calcAvgRating = async (courseId: string): Promise<number> => {
    const result = await RatingAndReview.aggregate([
        {
            $match: {
                course: new Types.ObjectId(courseId)
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
}
const getAllRatings = async (courseId: string | null = null): Promise<IRatingAndReview[]> => {
    return await RatingAndReview.find({
        course: courseId
    },{
        rating:true,
        review:true,
        user:true,
        course:true
    })
    .populate({
        path:"user",
        select:"firstName lastName email profileImage"
    })
    .populate({
        path:"course",
        select:"courseName"
    })
    .sort({rating:"desc"})
    .exec();
}
export {
    createRating,
    getAllRatings,
    calcAvgRating,
    verifyUserRating
}