import { Request, Response } from "express";
import { Types } from "mongoose";
import { 
    createCategory, 
    getAllCategories, 
    getCategoryById, 
    updateCategory, 
    deleteCategory, 
    getCategoryByIdPopulated,
    getOtherCategoryData,
    getTopSellingCourses
} from "../services/category.service";
import { success, error, notFound, validationError } from "../utils/response";

// Create Category
export const createCategoryController = async (req: Request, res: Response) => {
    try {
        const categoryDetails = await createCategory(req.body);
        return success(res, categoryDetails, 'Category created successfully', 201);
    } catch (err: any) {
        if (err.message === 'Category already exists') {
            return error(res, err.message, 409);
        }
        return error(res, err.message || 'Failed to create category');
    }
};

// Get All Categories
export const getAllCategoriesController = async (_req: Request, res: Response) => {
    try {
        const allCategories = await getAllCategories();
        return success(res, allCategories, 'All categories fetched successfully');
    } catch (err: any) {
        return error(res, err.message || 'Failed to fetch categories');
    }
};

// Get Category by ID
export const getCategoryByIdController = async (req: Request, res: Response) => {
    try {
        const { categoryId } = req.params;
        const category = await getCategoryById(new Types.ObjectId(categoryId));
        if (!category) {
            return notFound(res, 'Category not found');
        }
        return success(res, category, 'Category fetched successfully');
    } catch (err: any) {
        return error(res, err.message || 'Failed to fetch category');
    }
};

// Update Category
export const updateCategoryController = async (req: Request, res: Response) => {
    try {
        const { categoryId } = req.params;
        const updatedCategory = await updateCategory(new Types.ObjectId(categoryId), req.body);
        if (!updatedCategory) {
            return notFound(res, 'Category not found');
        }
        return success(res, updatedCategory, 'Category updated successfully');
    } catch (err: any) {
        return error(res, err.message || 'Failed to update category');
    }
};

// Delete Category
export const deleteCategoryController = async (req: Request, res: Response) => {
    try {
        const { categoryId } = req.params;
        const deleted = await deleteCategory(new Types.ObjectId(categoryId));
        if (!deleted) {
            return notFound(res, 'Category not found');
        }
        return success(res, null, 'Category deleted successfully');
    } catch (err: any) {
        return error(res, err.message || 'Failed to delete category');
    }
};
//Other details
export const getCategoryDetails = async (req: Request,res: Response) => {
    try {
        const { categoryId } = req.params;
        if(!categoryId){
            return validationError(res, ['Category ID is required']);
        }
        const category = await getCategoryByIdPopulated(categoryId);
        if (!category) {
            return notFound(res, 'Category not found');
        }
        const diffCategoryData = await getOtherCategoryData(categoryId);
        const topSellingCourses = await getTopSellingCourses(categoryId);
        return success(
            res,
            {
                category,
                diffCategoryData,
                topSellingCourses
            },
            'Category fetched successfully');
    } catch (err: any) {
        return error(
            res,
            err.message || 'Failed to fetch category details'
        );
    }
}

