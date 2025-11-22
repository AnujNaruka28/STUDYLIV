"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourseDetailsPopulated = exports.listCoursesProjection = exports.verifyStudentEnrolled = exports.findCourseById = exports.addRatingToCourse = exports.addStudentToCourse = exports.addCourseToInstructor = exports.addCourseToCategory = exports.deleteCourseDoc = exports.updateCourseDoc = exports.createCourseDoc = exports.removeStudentFromAllCourses = exports.detachInstructorFromCourses = void 0;
const Course_1 = __importDefault(require("../models/Course"));
const User_1 = __importDefault(require("../models/User"));
const category_service_1 = require("./category.service");
const detachInstructorFromCourses = async (instructorId) => {
    return await Course_1.default.updateMany({ instructor: instructorId }, { $unset: { instructor: "" } });
};
exports.detachInstructorFromCourses = detachInstructorFromCourses;
const removeStudentFromAllCourses = async (studentId) => {
    return await Course_1.default.updateMany({ studentsEnrolled: studentId }, { $pull: { studentsEnrolled: studentId } });
};
exports.removeStudentFromAllCourses = removeStudentFromAllCourses;
const createCourseDoc = async (data) => {
    // data is validated in controller
    return await Course_1.default.create(data);
};
exports.createCourseDoc = createCourseDoc;
const updateCourseDoc = async (data, courseId) => {
    return await Course_1.default.findByIdAndUpdate(courseId, data, { new: true });
};
exports.updateCourseDoc = updateCourseDoc;
const deleteCourseDoc = async (courseId) => {
    return await Course_1.default.findByIdAndDelete(courseId);
};
exports.deleteCourseDoc = deleteCourseDoc;
const addCourseToCategory = async (categoryId, courseId) => {
    return await (0, category_service_1.addCourseToCategory)(categoryId, courseId);
};
exports.addCourseToCategory = addCourseToCategory;
const addCourseToInstructor = async (instructorId, courseId) => {
    return await User_1.default.findByIdAndUpdate(instructorId, { $push: { courses: courseId } }, { new: true });
};
exports.addCourseToInstructor = addCourseToInstructor;
const addStudentToCourse = async (courseId, userId) => {
    return await Course_1.default.findByIdAndUpdate(courseId, { $addToSet: { studentsEnrolled: userId } }, { new: true });
};
exports.addStudentToCourse = addStudentToCourse;
const addRatingToCourse = async (rating, courseId) => {
    if (!rating) {
        return null;
    }
    return await Course_1.default.findByIdAndUpdate(courseId, {
        $push: { ratingAndReviews: rating._id },
    }, { new: true });
};
exports.addRatingToCourse = addRatingToCourse;
const findCourseById = async (courseId) => {
    return await Course_1.default.findById(courseId);
};
exports.findCourseById = findCourseById;
const verifyStudentEnrolled = async (courseId, userId) => {
    return await Course_1.default.findOne({
        _id: courseId,
        studentsEnrolled: { $elemMatch: { $eq: userId } }
    });
};
exports.verifyStudentEnrolled = verifyStudentEnrolled;
const listCoursesProjection = async () => {
    return await Course_1.default.find({}, {
        courseName: true,
        courseDescription: true,
        price: true,
        category: true,
        ratingAndReviews: true,
        whatYouWillLearn: true,
    });
};
exports.listCoursesProjection = listCoursesProjection;
const getCourseDetailsPopulated = async (courseId) => {
    return await Course_1.default.findById(courseId)
        .populate({ path: "instructor", populate: { path: "additionalDetails" } })
        .populate("category")
        .populate("ratingAndReviews")
        .populate({ path: "courseContent", populate: { path: "subSection" } })
        .populate("tag")
        .exec();
};
exports.getCourseDetailsPopulated = getCourseDetailsPopulated;
//# sourceMappingURL=course.service.js.map