import Course, { ICourse } from "../models/Course";
import { IRatingAndReview } from "../models/RatingAndReview";
import User from "../models/User";
import { CourseInput } from "../validations/course.validation";
import { addCourseToCategory as addCourseToCategoryService } from "./category.service";
import { deleteSection, getSectionById } from "./section.service";
import SubSection from "../models/SubSection";

export const detachInstructorFromCourses = async (instructorId: string) => {
    return await Course.updateMany(
        { instructor: instructorId },
        { $unset: { instructor: "" } }
    );
};

export const removeStudentFromAllCourses = async (studentId: string) => {
    return await Course.updateMany(
        { studentsEnrolled: studentId },
        { $pull: { studentsEnrolled: studentId } },
    );
};

export const createCourseDoc = async (data: Partial<CourseInput>): Promise<ICourse> => {
    // data is validated in controller
    return await Course.create(data as any);
};

export const updateCourseDoc = async (data: Partial<CourseInput>, courseId: string): Promise<ICourse | null> => {
    return await Course.findByIdAndUpdate(
        courseId,
        data,
        { new: true }
    );
};

export const deleteCourseDoc = async (courseId: string): Promise<ICourse | null> => {
    const course = await findCourseById(courseId);
    if(!course) return null;
    
    // Check if courseContent exists before iterating
    if(course.courseContent && course.courseContent.length > 0) {
        for(const sectionId of course.courseContent){
            const section = await getSectionById(sectionId.toString());
            if(section) {
                await SubSection.deleteMany({_id: {$in: section.subSection}})
                await deleteSection(section.id,courseId)
            }
        }
    }
    return await Course.findByIdAndDelete(courseId);
};



export const addCourseToCategory = async (categoryId: string, courseId: string) => {
    return await addCourseToCategoryService(categoryId, courseId);
};

export const addCourseToInstructor = async (instructorId: string, courseId: string) => {
    return await User.findByIdAndUpdate(
        instructorId,
        { $push: { courses: courseId } },
        { new: true }
    );
};

export const addStudentToCourse = async (courseId: string, userId: string) => {
    return await Course.findByIdAndUpdate(
        courseId,
        { $addToSet: { studentsEnrolled: userId } },
        { new: true }
    );
};

export const addRatingToCourse = async (rating: IRatingAndReview | null, courseId: string): Promise<ICourse | null> => {
    if(!rating) {
        return null;
    }
    return await Course.findByIdAndUpdate(
        courseId,
        {
            $push: { ratingAndReviews: rating._id },
        },
        { new: true }
    )
};
export const findCourseById = async (courseId: string): Promise<ICourse | null> => {
    return await Course.findById(courseId);
};

export const verifyStudentEnrolled = async (courseId: string, userId: string): Promise<boolean | null> => {
    return await Course.findOne({
        _id: courseId,
        studentsEnrolled: {$elemMatch: {$eq: userId}}
    });
}

export const listCoursesProjection = async () => {
    return await Course.find(
        {},
        {
            courseName: true,
            courseDescription: true,
            price: true,
            category: true,
            ratingAndReviews: true,
            whatYouWillLearn: true,
        }
    );
};

export const getCourseDetailsPopulated = async (courseId: string) => {
    return await Course.findById(courseId)
        .populate({ path: "instructor", populate: { path: "additionalDetails" } })
        .populate("category")
        .populate("ratingAndReviews")
        .populate({ path: "courseContent", populate: { path: "subSection" } })
        .populate("tag")
        .exec();
};
