"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllSections = exports.removeSubSectionFromSection = exports.addSubSectionToSection = exports.deleteSection = exports.updateSection = exports.getSectionsByCourseId = exports.getSectionById = exports.createSection = void 0;
const Section_1 = __importDefault(require("../models/Section"));
const Course_1 = __importDefault(require("../models/Course"));
// Create a new section
const createSection = async (sectionData, courseId) => {
    const { sectionName } = sectionData;
    // Check if course exists
    const course = await Course_1.default.findById(courseId);
    if (!course) {
        throw new Error('Course not found');
    }
    // Create section
    const sectionDetails = await Section_1.default.create({ sectionName });
    // Add section to course
    const updatedCourseDetails = await Course_1.default.findByIdAndUpdate(courseId, {
        $push: {
            courseContent: sectionDetails._id
        }
    }, { new: true }).populate('courseContent');
    if (!updatedCourseDetails) {
        // If course update failed, delete the created section
        await Section_1.default.findByIdAndDelete(sectionDetails._id);
        throw new Error('Failed to add section to course');
    }
    return {
        section: sectionDetails,
        updatedCourse: updatedCourseDetails
    };
};
exports.createSection = createSection;
// Get section by ID
const getSectionById = async (sectionId) => {
    const section = await Section_1.default.findById(sectionId).populate('subSection');
    return section;
};
exports.getSectionById = getSectionById;
// Get all sections for a course
const getSectionsByCourseId = async (courseId) => {
    const course = await Course_1.default.findById(courseId).populate({
        path: 'courseContent',
        populate: {
            path: 'subSection'
        }
    });
    if (!course) {
        throw new Error('Course not found');
    }
    return course.courseContent;
};
exports.getSectionsByCourseId = getSectionsByCourseId;
// Update section
const updateSection = async (sectionId, updateData) => {
    const { sectionName } = updateData;
    const updatedSection = await Section_1.default.findByIdAndUpdate(sectionId, { sectionName }, { new: true });
    return updatedSection;
};
exports.updateSection = updateSection;
// Delete section
const deleteSection = async (sectionId, courseId) => {
    // Check if course exists
    const course = await Course_1.default.findById(courseId);
    if (!course) {
        throw new Error('Course not found');
    }
    // Delete section
    const deletedSection = await Section_1.default.findByIdAndDelete(sectionId);
    if (!deletedSection) {
        throw new Error('Section not found');
    }
    // Remove section from course
    const updatedCourseDetails = await Course_1.default.findByIdAndUpdate(courseId, {
        $pull: {
            courseContent: deletedSection._id
        }
    }, { new: true });
    if (!updatedCourseDetails) {
        throw new Error('Failed to remove section from course');
    }
    return {
        deletedSection,
        updatedCourse: updatedCourseDetails
    };
};
exports.deleteSection = deleteSection;
// Add subsection to section
const addSubSectionToSection = async (sectionId, subSectionId) => {
    const updatedSection = await Section_1.default.findByIdAndUpdate(sectionId, { $push: { subSection: subSectionId } }, { new: true });
    return updatedSection;
};
exports.addSubSectionToSection = addSubSectionToSection;
// Remove subsection from section
const removeSubSectionFromSection = async (sectionId, subSectionId) => {
    const updatedSection = await Section_1.default.findByIdAndUpdate(sectionId, { $pull: { subSection: subSectionId } }, { new: true });
    return updatedSection;
};
exports.removeSubSectionFromSection = removeSubSectionFromSection;
// Get all sections (for admin purposes)
const getAllSections = async () => {
    const sections = await Section_1.default.find({}).populate('subSection');
    return sections;
};
exports.getAllSections = getAllSections;
//# sourceMappingURL=section.service.js.map