"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourseDetails = exports.showAllCourses = exports.deleteCourse = exports.updateCourse = exports.createCourse = void 0;
const mediaUploader_1 = require("../utils/mediaUploader");
const course_service_1 = require("../services/course.service");
const mongoose_1 = require("mongoose");
const user_service_1 = require("../services/user.service");
const category_service_1 = require("../services/category.service");
const SubSection_1 = require("./SubSection");
const response_1 = require("../utils/response");
// Create Course (validated with Zod, instructor from auth)
const createCourse = async (req, res) => {
    try {
        const { courseName, courseDescription, whatYouWillLearn, price, category } = req.body;
        const thumbnail = req.files?.thumbnailImage;
        if (!thumbnail) {
            return (0, response_1.validationError)(res, [{
                    field: 'thumbnail',
                    message: 'Thumbnail is required'
                }]);
        }
        if (!["image/jpeg", "image/png"].includes(thumbnail.mimetype)) {
            return (0, response_1.validationError)(res, [{
                    field: 'thumbnail',
                    message: 'Invalid file type. Only JPEG and PNG allowed.'
                }]);
        }
        if (typeof price !== "number" || price <= 0) {
            return (0, response_1.validationError)(res, [{
                    field: 'price',
                    message: 'Enter a valid amount for the course (must be greater than 0)'
                }]);
        }
        const userId = req.user?.id;
        const instructorDetails = await (0, user_service_1.findUserById)(userId);
        if (!instructorDetails) {
            return (0, response_1.notFound)(res, 'Instructor details not found');
        }
        const categoryDetails = await (0, category_service_1.getCategoryByName)(category);
        if (!categoryDetails) {
            return (0, response_1.notFound)(res, 'Category not found');
        }
        const { secure_url } = await (0, mediaUploader_1.uploadToCloudinary)(thumbnail, SubSection_1.folderName);
        const newCourse = await (0, course_service_1.createCourseDoc)({
            courseName,
            courseDescription,
            whatYouWillLearn,
            price,
            category: categoryDetails._id,
            instructor: instructorDetails._id,
            thumbnail: secure_url,
        });
        await Promise.all([
            (0, course_service_1.addCourseToCategory)(String(categoryDetails._id), String(newCourse._id)),
            (0, course_service_1.addCourseToInstructor)(String(instructorDetails._id), String(newCourse._id)),
        ]);
        return (0, response_1.success)(res, { id: newCourse._id }, 'Course created successfully', 201);
    }
    catch (err) {
        return (0, response_1.error)(res, err.message || 'Failed to create course');
    }
};
exports.createCourse = createCourse;
// Update Course (validated with Zod, instructor from auth)
const updateCourse = async (req, res) => {
    try {
        const { courseId } = req.params;
        const { courseName, courseDescription, whatYouWillLearn, price, category } = req.body;
        const thumbnail = req.files?.thumbnailImage;
        if (!thumbnail) {
            return (0, response_1.validationError)(res, [{
                    field: 'thumbnail',
                    message: 'Thumbnail is required'
                }]);
        }
        if (!["image/jpeg", "image/png"].includes(thumbnail.mimetype)) {
            return (0, response_1.validationError)(res, [{
                    field: 'thumbnail',
                    message: 'Invalid file type. Only JPEG and PNG allowed.'
                }]);
        }
        if (typeof price !== "number" || price <= 0) {
            return (0, response_1.validationError)(res, [{
                    field: 'price',
                    message: 'Enter a valid amount for the course (must be greater than 0)'
                }]);
        }
        const userId = req.user?.id;
        const instructorDetails = await (0, user_service_1.findUserById)(userId);
        if (!instructorDetails) {
            return (0, response_1.notFound)(res, 'Instructor details not found');
        }
        const categoryDetails = await (0, category_service_1.getCategoryByName)(category);
        if (!categoryDetails) {
            return (0, response_1.notFound)(res, 'Category not found');
        }
        const { secure_url } = await (0, mediaUploader_1.uploadToCloudinary)(thumbnail, SubSection_1.folderName);
        const updatedCourse = await (0, course_service_1.updateCourseDoc)({
            courseName,
            courseDescription,
            whatYouWillLearn,
            price,
            category: categoryDetails._id,
            instructor: instructorDetails._id,
            thumbnail: secure_url,
        }, courseId);
        if (!updatedCourse) {
            return (0, response_1.notFound)(res, 'Course not found');
        }
        await Promise.all([
            (0, course_service_1.addCourseToCategory)(String(categoryDetails._id), String(updatedCourse._id)),
            (0, course_service_1.addCourseToInstructor)(String(instructorDetails._id), String(updatedCourse._id)),
        ]);
        return (0, response_1.success)(res, { id: updatedCourse._id }, 'Course updated successfully', 201);
    }
    catch (err) {
        return (0, response_1.error)(res, err.message || 'Failed to create course');
    }
};
exports.updateCourse = updateCourse;
//Delete Course
const deleteCourse = async (req, res) => {
    try {
        const { courseId } = req.params;
        const deletedCourse = await (0, course_service_1.deleteCourseDoc)(courseId);
        if (!deletedCourse) {
            return (0, response_1.notFound)(res, 'Course not found');
        }
        return (0, response_1.success)(res, deletedCourse, 'Course deleted successfully', 201);
    }
    catch (err) {
        return (0, response_1.error)(res, err.message || 'Failed to delete Course');
    }
};
exports.deleteCourse = deleteCourse;
// List Courses
const showAllCourses = async (_req, res) => {
    try {
        const allCourses = await (0, course_service_1.listCoursesProjection)();
        return (0, response_1.success)(res, allCourses, 'All courses fetched successfully');
    }
    catch (err) {
        return (0, response_1.error)(res, err.message || 'Failed to fetch courses');
    }
};
exports.showAllCourses = showAllCourses;
// Course Details
const getCourseDetails = async (req, res) => {
    try {
        const { courseId } = req.params;
        const courseDetails = await (0, course_service_1.getCourseDetailsPopulated)(new mongoose_1.Types.ObjectId(courseId));
        if (!courseDetails) {
            return (0, response_1.notFound)(res, 'Course not found');
        }
        return (0, response_1.success)(res, courseDetails, 'Course details fetched successfully');
    }
    catch (err) {
        return (0, response_1.error)(res, err.message || 'Failed to fetch course details');
    }
};
exports.getCourseDetails = getCourseDetails;
//# sourceMappingURL=Course.js.map