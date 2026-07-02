import Section, { ISection } from "../models/Section";
import Course from "../models/Course";
import { SectionInput } from "../validations/section.validation";
import { Types } from "mongoose";

// Create a new section
export const createSection = async (sectionData: SectionInput, courseId: string): Promise<{ section: ISection; updatedCourse: any }> => {
    const { sectionName } = sectionData;
    
    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) {
        throw new Error('Course not found');
    }
    
    // Create section
    const sectionDetails = await Section.create({ sectionName });
    
    // Add section to course
    const updatedCourseDetails = await Course.findByIdAndUpdate(
        courseId,
        {
            $push: {
                courseContent: sectionDetails._id
            }
        },
        { new: true }
    ).populate('courseContent');
    
    if (!updatedCourseDetails) {
        // If course update failed, delete the created section
        await Section.findByIdAndDelete(sectionDetails._id);
        throw new Error('Failed to add section to course');
    }
    
    return {
        section: sectionDetails,
        updatedCourse: updatedCourseDetails
    };
};

// Get section by ID
export const getSectionById = async (sectionId: string): Promise<ISection | null> => {
    const section = await Section.findById(sectionId).populate('subSection');
    return section;
};

// Get all sections for a course
export const getSectionsByCourseId = async (courseId: Types.ObjectId): Promise<ISection[]> => {
    const course = await Course.findById(courseId).populate({
        path: 'courseContent',
        populate: {
            path: 'subSection'
        }
    });
    
    if (!course) {
        throw new Error('Course not found');
    }
    
    return course.courseContent as unknown as ISection[];
};
// Update section
export const updateSection = async (sectionId: Types.ObjectId, updateData: Partial<SectionInput>): Promise<ISection | null> => {
    const { sectionName } = updateData;
    
    const updatedSection = await Section.findByIdAndUpdate(
        sectionId,
        { sectionName },
        { new: true }
    );
    
    return updatedSection;
};

// Delete section
export const deleteSection = async (sectionId: string, courseId: string): Promise<{ deletedSection: ISection; updatedCourse: any }> => {
    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) {
        throw new Error('Course not found');
    }
    // Delete Sub Sections
    // Delete section
    const deletedSection = await Section.findByIdAndDelete(sectionId);
    if (!deletedSection) {
        throw new Error('Section not found');
    }
    
    // Remove section from course
    const updatedCourseDetails = await Course.findByIdAndUpdate(
        courseId,
        {
            $pull: {
                courseContent: deletedSection._id
            }
        },
        { new: true }
    );
    
    if (!updatedCourseDetails) {
        throw new Error('Failed to remove section from course');
    }
    
    return {
        deletedSection,
        updatedCourse: updatedCourseDetails
    };
};

// Add subsection to section
export const addSubSectionToSection = async (sectionId: string, subSectionId: string): Promise<ISection | null> => {
    const updatedSection = await Section.findByIdAndUpdate(
        sectionId,
        { $push: { subSection: subSectionId } },
        { new: true }
    );
    return updatedSection;
};

// Remove subsection from section
export const removeSubSectionFromSection = async (sectionId: string, subSectionId: string): Promise<ISection | null> => {
    const updatedSection = await Section.findByIdAndUpdate(
        sectionId,
        { $pull: { subSection: subSectionId } },
        { new: true }
    );
    return updatedSection;
};

// Get all sections (for admin purposes)
export const getAllSections = async (): Promise<ISection[]> => {
    const sections = await Section.find({}).populate('subSection');
    return sections;
};
