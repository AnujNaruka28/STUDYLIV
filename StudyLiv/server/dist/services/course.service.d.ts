import { ICourse } from "../models/Course";
import { IRatingAndReview } from "../models/RatingAndReview";
import { CourseInput } from "../validations/course.validation";
import { Types } from "mongoose";
export declare const detachInstructorFromCourses: (instructorId: Types.ObjectId) => Promise<import("mongoose").UpdateWriteOpResult>;
export declare const removeStudentFromAllCourses: (studentId: Types.ObjectId) => Promise<import("mongoose").UpdateWriteOpResult>;
export declare const createCourseDoc: (data: Partial<CourseInput>) => Promise<ICourse>;
export declare const updateCourseDoc: (data: Partial<CourseInput>, courseId: string) => Promise<ICourse | null>;
export declare const deleteCourseDoc: (courseId: string) => Promise<ICourse | null>;
export declare const addCourseToCategory: (categoryId: string, courseId: string) => Promise<import("../models/Category").ICategory | null>;
export declare const addCourseToInstructor: (instructorId: string, courseId: string) => Promise<(import("mongoose").Document<unknown, {}, import("../models/User").IUser, {}, {}> & import("../models/User").IUser & Required<{
    _id: unknown;
}> & {
    __v: number;
}) | null>;
export declare const addStudentToCourse: (courseId: string, userId: string) => Promise<(import("mongoose").Document<unknown, {}, ICourse, {}, {}> & ICourse & Required<{
    _id: unknown;
}> & {
    __v: number;
}) | null>;
export declare const addRatingToCourse: (rating: IRatingAndReview | null, courseId: string) => Promise<ICourse | null>;
export declare const findCourseById: (courseId: string) => Promise<(import("mongoose").Document<unknown, {}, ICourse, {}, {}> & ICourse & Required<{
    _id: unknown;
}> & {
    __v: number;
}) | null>;
export declare const verifyStudentEnrolled: (courseId: string, userId: string) => Promise<boolean | null>;
export declare const listCoursesProjection: () => Promise<(import("mongoose").Document<unknown, {}, ICourse, {}, {}> & ICourse & Required<{
    _id: unknown;
}> & {
    __v: number;
})[]>;
export declare const getCourseDetailsPopulated: (courseId: Types.ObjectId) => Promise<(import("mongoose").Document<unknown, {}, ICourse, {}, {}> & ICourse & Required<{
    _id: unknown;
}> & {
    __v: number;
}) | null>;
//# sourceMappingURL=course.service.d.ts.map