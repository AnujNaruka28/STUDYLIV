"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSubSection = exports.updatesubSection = exports.createsubSection = exports.folderName = void 0;
const mediaUploader_1 = require("../utils/mediaUploader");
const section_service_1 = require("../services/section.service");
const subsection_service_1 = require("../services/subsection.service");
const env_validation_1 = require("../validations/env.validation");
const response_1 = require("../utils/response");
exports.folderName = env_validation_1.ENV.FOLDER_NAME;
const createsubSection = async (req, res) => {
    try {
        const { title, description, duration, sectionId } = req.body;
        const video = req.files?.videoFile;
        // Input validation
        const errors = [];
        if (!title)
            errors.push({ field: 'title', message: 'Title is required' });
        if (!description)
            errors.push({ field: 'description', message: 'Description is required' });
        if (!duration)
            errors.push({ field: 'duration', message: 'Duration is required' });
        if (!sectionId)
            errors.push({ field: 'sectionId', message: 'Section ID is required' });
        if (!video)
            errors.push({ field: 'videoFile', message: 'Video file is required' });
        if (errors.length > 0) {
            return (0, response_1.validationError)(res, errors);
        }
        // Upload video to Cloudinary
        const { secure_url } = await (0, mediaUploader_1.uploadToCloudinary)(video, exports.folderName);
        // Create sub-section
        const subsectionDetails = await (0, subsection_service_1.createSubSection)({
            title: String(title).trim(),
            description: String(description).trim(),
            duration: duration,
            videoUrl: secure_url
        });
        // Add sub-section to section
        const updatedSectionDetails = await (0, section_service_1.addSubSectionToSection)(String(sectionId), String(subsectionDetails._id));
        if (!updatedSectionDetails) {
            return (0, response_1.error)(res, 'Failed to add sub-section to section', 400);
        }
        return (0, response_1.success)(res, { subsectionDetails, updatedSectionDetails }, 'Sub-section created successfully', 201);
    }
    catch (err) {
        return (0, response_1.error)(res, `Failed to create sub-section: ${err.message}`);
    }
};
exports.createsubSection = createsubSection;
const updatesubSection = async (req, res) => {
    try {
        const { title, description, duration } = req.body;
        const { subsectionId } = req.params;
        const video = req.files?.videoFile;
        // Input validation
        const errors = [];
        if (!title)
            errors.push({ field: 'title', message: 'Title is required' });
        if (!description)
            errors.push({ field: 'description', message: 'Description is required' });
        if (!duration)
            errors.push({ field: 'duration', message: 'Duration is required' });
        if (!subsectionId)
            errors.push({ field: 'subsectionId', message: 'Sub-section ID is required' });
        if (!video)
            errors.push({ field: 'videoFile', message: 'Video file is required' });
        if (errors.length > 0) {
            return (0, response_1.validationError)(res, errors);
        }
        // Upload new video to Cloudinary
        const { secure_url } = await (0, mediaUploader_1.uploadToCloudinary)(video, exports.folderName);
        // Get existing sub-section to delete old video
        const existingSubSection = await (0, subsection_service_1.findSubSectionById)(subsectionId);
        if (!existingSubSection) {
            return (0, response_1.notFound)(res, 'Sub-section not found');
        }
        // Delete old video from Cloudinary
        await (0, mediaUploader_1.deleteFromCloudinary)(existingSubSection.videoUrl, 'video');
        // Update sub-section
        const updatedSubSection = await (0, subsection_service_1.updateSubSection)(subsectionId, {
            title: String(title).trim(),
            description: String(description).trim(),
            duration: duration,
            videoUrl: secure_url
        });
        if (!updatedSubSection) {
            return (0, response_1.error)(res, 'Failed to update sub-section', 400);
        }
        return (0, response_1.success)(res, updatedSubSection, 'Sub-section updated successfully');
    }
    catch (err) {
        return (0, response_1.error)(res, `Failed to update sub-section: ${err.message}`);
    }
};
exports.updatesubSection = updatesubSection;
const deleteSubSection = async (req, res) => {
    try {
        const { subsectionId, sectionId } = req.body;
        // Input validation
        const errors = [];
        if (!subsectionId)
            errors.push({ field: 'subsectionId', message: 'Sub-section ID is required' });
        if (!sectionId)
            errors.push({ field: 'sectionId', message: 'Section ID is required' });
        if (errors.length > 0) {
            return (0, response_1.validationError)(res, errors);
        }
        // Find and validate sub-section
        const existing = await (0, subsection_service_1.findSubSectionById)(subsectionId);
        if (!existing) {
            return (0, response_1.notFound)(res, 'Sub-section not found');
        }
        try {
            // Delete video from Cloudinary
            await (0, mediaUploader_1.deleteFromCloudinary)(existing.videoUrl, 'video');
            // Delete sub-section
            const deletedSubSection = await (0, subsection_service_1.deleteSubSectionById)(subsectionId);
            if (!deletedSubSection) {
                return (0, response_1.error)(res, 'Failed to delete sub-section', 400);
            }
            // Remove sub-section from section
            const updatedSection = await (0, section_service_1.removeSubSectionFromSection)(sectionId, String(deletedSubSection._id));
            if (!updatedSection) {
                return (0, response_1.notFound)(res, 'Section not found');
            }
            return (0, response_1.success)(res, { deletedSubSection, updatedSection }, 'Sub-section deleted successfully');
        }
        catch (deleteError) {
            return (0, response_1.error)(res, `Failed to delete sub-section: ${deleteError.message}`);
        }
    }
    catch (err) {
        return (0, response_1.error)(res, `Internal server error: ${err.message}`);
    }
};
exports.deleteSubSection = deleteSubSection;
//# sourceMappingURL=SubSection.js.map