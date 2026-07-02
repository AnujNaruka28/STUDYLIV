import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { 
  createSection, 
  updateSection, 
  deleteSection, 
  getSectionById, 
  getSectionsByCourseId 
} from '../services/section.service';
import { 
  success, 
  error, 
  notFound, 
  validationError 
} from '../utils/response';

// Create Section
export const createSectionController = async (req: Request, res: Response) => {
    try {
        const { courseId } = req.params;
        const sectionData = req.body;
        
        if (!courseId) {
            return validationError(res, [{
                field: 'courseId',
                message: 'Course ID is required'
            }]);
        }

        const result = await createSection(sectionData, courseId);
        return success(res, result, 'Section created successfully', 201);

    } catch (err: any) {
        if (err.message === 'Course not found') {
            return notFound(res, err.message);
        }
        return error(
            res,
            `Failed to create section: ${err.message}`
        );
    }
};

// Update Section
export const updateSectionController = async (req: Request, res: Response) => {
    try {
        const { sectionId } = req.params;
        
        if (!sectionId) {
            return validationError(res, [{
                field: 'sectionId',
                message: 'Section ID is required'
            }]);
        }

        const updatedSection = await updateSection(
            new Types.ObjectId(sectionId), 
            req.body
        );

        if (!updatedSection) {
            return notFound(res, 'Section not found');
        }

        return success(
            res, 
            updatedSection, 
            'Section updated successfully'
        );
    } catch (err: any) {
        return error(
            res,
            `Failed to update section: ${err.message}`
        );
    }
};

// Delete Section
export const deleteSectionController = async (req: Request, res: Response) => {
    try {
        const { sectionId } = req.params;
        const { courseId } = req.body;

        if (!sectionId || !courseId) {
            return validationError(res, [
                !sectionId && { field: 'sectionId', message: 'Section ID is required' },
                !courseId && { field: 'courseId', message: 'Course ID is required' }
            ].filter(Boolean) as any);
        }

        const result = await deleteSection(sectionId, courseId);

        return success(
            res, 
            result, 
            'Section deleted successfully'
        );
    } catch (err: any) {
        if (err.message === 'Section not found' || err.message === 'Course not found') {
            return notFound(res, err.message);
        }
        return error(
            res,
            `Failed to delete section: ${err.message}`
        );
    }
};

// Get Section by ID
export const getSectionByIdController = async (req: Request, res: Response) => {
    try {
        const { sectionId } = req.params;
        
        if (!sectionId) {
            return validationError(res, [{
                field: 'sectionId',
                message: 'Section ID is required'
            }]);
        }

        const section = await getSectionById(sectionId);
        if (!section) {
            return notFound(res, 'Section not found');
        }

        return success(
            res, 
            section, 
            'Section fetched successfully'
        );
    } catch (err: any) {
        return error(
            res,
            `Failed to fetch section: ${err.message}`
        );
    }
};

// Get Sections by Course ID
export const getSectionsByCourseIdController = async (req: Request, res: Response) => {
    try {
        const { courseId } = req.params;
        
        if (!courseId) {
            return validationError(res, [{
                field: 'courseId',
                message: 'Course ID is required'
            }]);
        }

        const sections = await getSectionsByCourseId(new Types.ObjectId(courseId));
        return success(
            res, 
            sections, 
            'Sections fetched successfully'
        );
    } catch (err: any) {
        if (err.message === 'Course not found') {
            return notFound(res, err.message);
        }
        return error(
            res,
            `Failed to fetch sections: ${err.message}`
        );
    }
};