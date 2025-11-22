"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSectionsByCourseIdController = exports.getSectionByIdController = exports.deleteSectionController = exports.updateSectionController = exports.createSectionController = void 0;
const mongoose_1 = require("mongoose");
const section_service_1 = require("../services/section.service");
const response_1 = require("../utils/response");
// Create Section
const createSectionController = async (req, res) => {
    try {
        const { courseId, ...sectionData } = req.body;
        if (!courseId) {
            return (0, response_1.validationError)(res, [{
                    field: 'courseId',
                    message: 'Course ID is required'
                }]);
        }
        const result = await (0, section_service_1.createSection)(sectionData, courseId);
        return (0, response_1.success)(res, result, 'Section created successfully', 201);
    }
    catch (err) {
        if (err.message === 'Course not found') {
            return (0, response_1.notFound)(res, err.message);
        }
        return (0, response_1.error)(res, `Failed to create section: ${err.message}`);
    }
};
exports.createSectionController = createSectionController;
// Update Section
const updateSectionController = async (req, res) => {
    try {
        const { sectionId } = req.params;
        if (!sectionId) {
            return (0, response_1.validationError)(res, [{
                    field: 'sectionId',
                    message: 'Section ID is required'
                }]);
        }
        const updatedSection = await (0, section_service_1.updateSection)(new mongoose_1.Types.ObjectId(sectionId), req.body);
        if (!updatedSection) {
            return (0, response_1.notFound)(res, 'Section not found');
        }
        return (0, response_1.success)(res, updatedSection, 'Section updated successfully');
    }
    catch (err) {
        return (0, response_1.error)(res, `Failed to update section: ${err.message}`);
    }
};
exports.updateSectionController = updateSectionController;
// Delete Section
const deleteSectionController = async (req, res) => {
    try {
        const { sectionId } = req.params;
        const { courseId } = req.body;
        if (!sectionId || !courseId) {
            return (0, response_1.validationError)(res, [
                !sectionId && { field: 'sectionId', message: 'Section ID is required' },
                !courseId && { field: 'courseId', message: 'Course ID is required' }
            ].filter(Boolean));
        }
        const result = await (0, section_service_1.deleteSection)(sectionId, courseId);
        return (0, response_1.success)(res, result, 'Section deleted successfully');
    }
    catch (err) {
        if (err.message === 'Section not found' || err.message === 'Course not found') {
            return (0, response_1.notFound)(res, err.message);
        }
        return (0, response_1.error)(res, `Failed to delete section: ${err.message}`);
    }
};
exports.deleteSectionController = deleteSectionController;
// Get Section by ID
const getSectionByIdController = async (req, res) => {
    try {
        const { sectionId } = req.params;
        if (!sectionId) {
            return (0, response_1.validationError)(res, [{
                    field: 'sectionId',
                    message: 'Section ID is required'
                }]);
        }
        const section = await (0, section_service_1.getSectionById)(new mongoose_1.Types.ObjectId(sectionId));
        if (!section) {
            return (0, response_1.notFound)(res, 'Section not found');
        }
        return (0, response_1.success)(res, section, 'Section fetched successfully');
    }
    catch (err) {
        return (0, response_1.error)(res, `Failed to fetch section: ${err.message}`);
    }
};
exports.getSectionByIdController = getSectionByIdController;
// Get Sections by Course ID
const getSectionsByCourseIdController = async (req, res) => {
    try {
        const { courseId } = req.params;
        if (!courseId) {
            return (0, response_1.validationError)(res, [{
                    field: 'courseId',
                    message: 'Course ID is required'
                }]);
        }
        const sections = await (0, section_service_1.getSectionsByCourseId)(new mongoose_1.Types.ObjectId(courseId));
        return (0, response_1.success)(res, sections, 'Sections fetched successfully');
    }
    catch (err) {
        if (err.message === 'Course not found') {
            return (0, response_1.notFound)(res, err.message);
        }
        return (0, response_1.error)(res, `Failed to fetch sections: ${err.message}`);
    }
};
exports.getSectionsByCourseIdController = getSectionsByCourseIdController;
//# sourceMappingURL=Section.js.map