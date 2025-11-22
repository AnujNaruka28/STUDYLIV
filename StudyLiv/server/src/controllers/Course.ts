import { Request, Response } from "express";
import { uploadToCloudinary } from "../utils/mediaUploader";
import {
    addCourseToCategory,
    addCourseToInstructor,
    createCourseDoc,
    deleteCourseDoc,
    getCourseDetailsPopulated,
    listCoursesProjection,
    updateCourseDoc,
} from "../services/course.service";
import { findUserById } from "../services/user.service";
import { getCategoryByName } from "../services/category.service";
import { folderName } from "./SubSection";
import { 
    error, 
    success, 
    notFound, 
    validationError 
} from "../utils/response";
import { UploadedFile } from "express-fileupload";
import { CustomRequest } from "../types/CustomRequest";

// Create Course (validated with Zod, instructor from auth)
export const createCourse = async (req: Request, res: Response) => {
    try {
        const { courseName, courseDescription, whatYouWillLearn, price, category } = req.body;
        const thumbnail:UploadedFile = (req as any).files?.thumbnailImage as UploadedFile;

        if (!thumbnail) {
            return validationError(res, [{
                field: 'thumbnail',
                message: 'Thumbnail is required'
            }]);
        }

        if (!["image/jpeg", "image/png"].includes(thumbnail.mimetype)) {
            return validationError(res, [{
                field: 'thumbnail',
                message: 'Invalid file type. Only JPEG and PNG allowed.'
            }]);
        }

        // Convert price to number if it's a string (from form-data)
        const priceNumber = typeof price === 'string' ? parseFloat(price) : price;
        
        if (isNaN(priceNumber) || priceNumber <= 0) {
            return validationError(res, [{
                field: 'price',
                message: 'Enter a valid amount for the course (must be greater than 0)'
            }]);
        }

        const userId = (req as CustomRequest).user?.id;
        if(!userId) {
            return validationError(res,[{
                field: 'userId',
                message: 'User not found'
            }])
        }
        const instructorDetails = await findUserById(userId as string);
        if (!instructorDetails) {
            return notFound(
                res,
                'Instructor details not found'
            );
        }

        const categoryDetails = await getCategoryByName(category);
        if (!categoryDetails) {
            return notFound(
                res, 
                'Category not found'
            );
        }

        const { secure_url } = await uploadToCloudinary(thumbnail.tempFilePath, folderName);

        const newCourse = await createCourseDoc({
            courseName,
            courseDescription,
            whatYouWillLearn,
            price: priceNumber, // Use converted number
            category: categoryDetails._id,
            instructor: instructorDetails._id,
            thumbnail: secure_url,
        } as any);

        await Promise.all([
            addCourseToCategory(String(categoryDetails._id), String(newCourse._id)),
            addCourseToInstructor(String(instructorDetails._id), String(newCourse._id)),
        ]);

        return success(
            res, 
            { id: newCourse._id }, 
            'Course created successfully', 
            201
        );
    } catch (err: any) {
        return error(
            res, 
            err.message || 'Failed to create course'
        );
    }
};
// Update Course (validated with Zod, instructor from auth)
export const updateCourse =  async (req: Request, res: Response) => {
    try {
        const { courseId } = req.params;
        
        const { courseName, courseDescription, whatYouWillLearn, price, category } = req.body;
        const thumbnail = (req as any).files?.thumbnailImage;

        // Validate thumbnail only if provided
        if (thumbnail && !["image/jpeg", "image/png"].includes(thumbnail.mimetype)) {
            return validationError(res, [{
                field: 'thumbnail',
                message: 'Invalid file type. Only JPEG and PNG allowed.'
            }]);
        }

        // Convert price to number if it's a string (from form-data) and validate only if provided
        let priceNumber;
        if (price !== undefined) {
            priceNumber = typeof price === 'string' ? parseFloat(price) : price;
            if (isNaN(priceNumber) || priceNumber <= 0) {
                return validationError(res, [{
                    field: 'price',
                    message: 'Enter a valid amount for the course (must be greater than 0)'
                }]);
            }
        }

        const userId = (req as any).user?.id;
        const instructorDetails = await findUserById(userId);
        if (!instructorDetails) {
            return notFound(
                res, 
                'Instructor details not found'
            );
        }

        let categoryDetails;
        if (category) {
            categoryDetails = await getCategoryByName(category);
            if (!categoryDetails) {
                return notFound(
                    res, 
                    'Category not found'
                );
            }
        }

        // Prepare update data
        const updateData: any = {
            courseName,
            courseDescription,
            whatYouWillLearn,
            instructor: instructorDetails._id as string,
        };

        // Only include category if provided
        if (category && categoryDetails) {
            updateData.category = categoryDetails._id as string;
        }

        // Only include price if provided
        if (price !== undefined) {
            updateData.price = priceNumber;
        }

        // Only upload and update thumbnail if provided
        if (thumbnail) {
            const { secure_url } = await uploadToCloudinary(thumbnail, folderName);
            updateData.thumbnail = secure_url;
        }

        const updatedCourse = await updateCourseDoc(updateData, courseId as string);
        if (!updatedCourse) {
            return notFound(
                res, 
                'Course not found'
            );
        }

        // Only update category relationship if category was changed
        const promises = [];
        if (category && categoryDetails) {
            promises.push(addCourseToCategory(String(categoryDetails._id), String(updatedCourse._id)));
        }
        promises.push(addCourseToInstructor(String(instructorDetails._id), String(updatedCourse._id)));
        
        await Promise.all(promises);

        return success(
            res, 
            { id: updatedCourse._id }, 
            'Course updated successfully', 
            201 
        );
    } catch (err: any) {
        return error(
            res, 
            err.message || 'Failed to create course'
        );
    }
};
//Delete Course
export const deleteCourse = async(req: Request, res: Response) => {
    try {
        const {courseId} = req.params;
        const deletedCourse = await deleteCourseDoc(courseId as string);
        if(!deletedCourse) {
            return notFound(
                res, 
                'Course not found'
            );
        }
        return success(
            res,
            deletedCourse,
            'Course deleted successfully',
            201
        );
    } catch (err: any) {
        return error(
            res,
            err.message || 'Failed to delete Course'
        )
    }
}
// List Courses
export const showAllCourses = async (_req: Request, res: Response) => {
    try {
        const allCourses = await listCoursesProjection();
        return success(
            res, 
            allCourses, 
            'All courses fetched successfully'
        );
    } catch (err: any) {
        return error(
            res, 
            err.message || 'Failed to fetch courses'
        );
    }
};

// Course Details
export const getCourseDetails = async (req: Request, res: Response) => {
    try {
        const { courseId } = req.params;
        const courseDetails = await getCourseDetailsPopulated(courseId as string);

        if (!courseDetails) {
            return notFound(
                res, 
                'Course not found'
            );
        }

        return success(
            res, 
            courseDetails, 
            'Course details fetched successfully'
        );
    } catch (err: any) {
        return error(res, err.message || 'Failed to fetch course details');
    }
};