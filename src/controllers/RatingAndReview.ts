import { Request,Response } from "express";
import {
    validationError,
    success,
    error
} from '../utils/response';
import {
    addRatingToCourse,
    findCourseById,
    verifyStudentEnrolled
} from "../services/course.service";
import {
    createRating,
    calcAvgRating,
    verifyUserRating,
    getAllRatings
} from "../services/rating.service";

export const createRatingAndReview = async (req:Request,res:Response) => {
    try{
        const {rating , review} = req.body;
        if(!rating || !review) {
            return validationError(res, [{
                field: 'rating or review',
                message: 'Rating or review is required'
            }]);
        }
        const userId = (req as any).user?.id;
        if(!userId) {
            return validationError(res, [{
                field: 'userId',
                message: 'User not found'
            }]);
        }
        const courseId = req.params.courseId;
        if(!courseId) {
            return validationError(res, [{
                field: 'courseId',
                message: 'Course not found'
            }]);
        }
        const courseDetails = await findCourseById(courseId);
        if(!courseDetails) {
            return validationError(res, [{
                field: 'courseId',
                message: 'Course not found'
            }]);
        }
        const isEnrolled = await verifyStudentEnrolled(courseId, userId);
        if(!isEnrolled) {
            return validationError(res, [{
                field: 'userId',
                message: 'User not enrolled in the course'
            }]);
        }
        const isRated = await verifyUserRating(courseId, userId);
        if(isRated) {
            return validationError(res, [{
                field: 'userId',
                message: 'User already rated the course'
            }]);
        }
        const ratingDetails = await createRating({
            rating,
            review,
            user: userId,
            course: courseId
        });
        const updatedCourse = await addRatingToCourse(ratingDetails, courseId);
        if(!updatedCourse) {
            return error(
                res,
                'Failed to update course with rating',
                500
            );
        }
        return success(
            res,
            ratingDetails,
            'Rating and review created successfully',
            201);
    }catch(err: any) {
        return error(
            res,
            err.message || 'Failed to create Rating',
            500
        );
    }
}

export const getAvgRating = async (req: Request, res: Response) => {
    try {
        const courseId = req.params.courseId;
        if(!courseId) {
            return validationError(res, [{
                field: 'courseId',
                message: 'Course Id not found'
            }]);
        }
        const courseDetails = await findCourseById(courseId);
        if(!courseDetails) {
            return validationError(res, [{
                field: 'courseId',
                message: 'Course not found'
            }]);
        }
        const avgRating = await calcAvgRating(courseId);
        if(!avgRating) {
            return validationError(res, [{
                field: 'courseId',
                message: 'No ratings found for the course'
            }]);
        }
        return success(
            res,
            avgRating,
            'Average rating fetched successfully',
            200);
    } catch (err: any) {
        return error(
            res,
            err.message || 'Failed to fetch average rating',
            500
        );
    }
}

export const allRatings = async (_req: Request, res: Response) => {
    try {
        const ratings = await getAllRatings();
        return success(
            res,
            ratings,
            'All ratings fetched successfully',
            200);
    } catch (err: any) {
        return error(
            res,
            err.message || 'Failed to fetch all ratings',
            500
        );
    }
}
export const courseRatings = async (req: Request, res: Response) => {
    try {
        const courseId = req.params.courseId;
        if(!courseId) {
            return validationError(res, [{
                field: 'courseId',
                message: 'Course Id not found'
            }]);
        }
        const ratings = await getAllRatings(courseId);
        if(!ratings) {
            return validationError(res, [{
                field: 'courseId',
                message: 'No ratings found for the course'
            }]);
        }
        return success(
            res,
            ratings,
            'All ratings fetched successfully',
            200);
    } catch (err: any) {
        return error(
            res,
            err.message || 'Failed to fetch all ratings',
            500
        );
    }
}