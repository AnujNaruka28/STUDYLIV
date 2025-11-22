import { Request, Response } from 'express';
import { uploadToCloudinary, deleteFromCloudinary } from '../utils/mediaUploader';
import {
    addSubSectionToSection,
    removeSubSectionFromSection
} from '../services/section.service';
import {
    createSubSection,
    updateSubSection,
    deleteSubSectionById,
    findSubSectionById
} from '../services/subsection.service';
import { ENV as env } from '../validations/env.validation';
import {
    success,
    error,
    notFound,
    validationError
} from '../utils/response';
import { UploadedFile } from 'express-fileupload';

export const folderName = env.FOLDER_NAME;

export const createsubSection = async (req: Request, res: Response) => {
    try {
        const { title, description, duration, sectionId } = req.body;
        const video: UploadedFile = (req as any).files?.videoFile as UploadedFile;

        // Input validation
        const errors = [];
        if (!title) errors.push({ field: 'title', message: 'Title is required' });
        if (!description) errors.push({ field: 'description', message: 'Description is required' });
        if (!duration) errors.push({ field: 'duration', message: 'Duration is required' });
        if (!sectionId) errors.push({ field: 'sectionId', message: 'Section ID is required' });
        if (!video) errors.push({ field: 'videoFile', message: 'Video file is required' });

        if(!["video/mp4","video/avi","video/mov"].includes(video.mimetype)){
            errors.push({ field: 'videoFile', message: 'Video file must be mp4, avi, or mov' });
        }
        if (errors.length > 0) {
            return validationError(res, errors);
        }
        // Upload video to Cloudinary
        const { secure_url } = await uploadToCloudinary(video.tempFilePath, folderName);

        // Create sub-section
        const subsectionDetails = await createSubSection({
            title: String(title).trim(),
            description: String(description).trim(),
            duration: duration,
            videoUrl: secure_url
        });

        // Add sub-section to section
        const updatedSectionDetails = await addSubSectionToSection(
            String(sectionId),
            String(subsectionDetails._id)
        );

        if (!updatedSectionDetails) {
            return error(res, 'Failed to add sub-section to section', 400);
        }

        return success(
            res,
            { subsectionDetails, updatedSectionDetails },
            'Sub-section created successfully',
            201
        );
    } catch (err: any) {
        return error(
            res,
            `Failed to create sub-section: ${err.message}`
        );
    }
};

export const updatesubSection = async (req: Request, res: Response) => {
    try {
        const { title, description, duration} = req.body;
        const {subsectionId} = (req as any).params;
        const video = (req as any).files?.videoFile;

        // Upload new video to Cloudinary
        var url;
        if(video) {
            url= (await uploadToCloudinary(video, folderName)).secure_url;
        }

        // Get existing sub-section to delete old video
        const existingSubSection = await findSubSectionById(subsectionId);
        if (!existingSubSection) {
            return notFound(res, 'Sub-section not found');
        }

        // Delete old video from Cloudinary
        if(existingSubSection.videoUrl) {
            await deleteFromCloudinary(existingSubSection.videoUrl, 'video');
        }

        // Update sub-section
        const updatedSubSection = await updateSubSection(subsectionId, {
            title: String(title).trim(),
            description: String(description).trim(),
            duration: duration,
            videoUrl: url as string
        });

        if (!updatedSubSection) {
            return error(res, 'Failed to update sub-section', 400);
        }

        return success(
            res,
            updatedSubSection,
            'Sub-section updated successfully'
        );
    } catch (err: any) {
        return error(
            res,
            `Failed to update sub-section: ${err.message}`
        );
    }
};

export const deleteSubSection = async (req: Request, res: Response) => {
    try {
        const { subsectionId } = req.params;
        const {sectionId} = req.body;
        // Input validation
        const errors = [];
        if (!subsectionId) errors.push({ field: 'subsectionId', message: 'Sub-section ID is required' });
        if (!sectionId) errors.push({ field: 'sectionId', message: 'Section ID is required' });

        if (errors.length > 0) {
            return validationError(res, errors);
        }

        // Find and validate sub-section
        const existing = await findSubSectionById(subsectionId as string);
        if (!existing) {
            return notFound(res, 'Sub-section not found');
        }

        try {
            // Delete video from Cloudinary
            await deleteFromCloudinary(existing.videoUrl, 'video');

            // Delete sub-section
            const deletedSubSection = await deleteSubSectionById(subsectionId as string);
            if (!deletedSubSection) {
                return error(res, 'Failed to delete sub-section', 400);
            }

            // Remove sub-section from section
            const updatedSection = await removeSubSectionFromSection(
                sectionId,
                String(deletedSubSection._id)
            );

            if (!updatedSection) {
                return notFound(res, 'Section not found');
            }

            return success(
                res,
                { deletedSubSection, updatedSection },
                'Sub-section deleted successfully'
            );
        } catch (deleteError: any) {
            return error(
                res,
                `Failed to delete sub-section: ${deleteError.message}`
            );
        }
    } catch (err: any) {
        return error(
            res,
            `Internal server error: ${err.message}`
        );
    }
};