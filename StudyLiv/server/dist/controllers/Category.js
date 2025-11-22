"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryDetails = exports.deleteCategoryController = exports.updateCategoryController = exports.getCategoryByIdController = exports.getAllCategoriesController = exports.createCategoryController = void 0;
const mongoose_1 = require("mongoose");
const category_service_1 = require("../services/category.service");
const response_1 = require("../utils/response");
// Create Category
const createCategoryController = async (req, res) => {
    try {
        const categoryDetails = await (0, category_service_1.createCategory)(req.body);
        return (0, response_1.success)(res, categoryDetails, 'Category created successfully', 201);
    }
    catch (err) {
        if (err.message === 'Category already exists') {
            return (0, response_1.error)(res, err.message, 409);
        }
        return (0, response_1.error)(res, err.message || 'Failed to create category');
    }
};
exports.createCategoryController = createCategoryController;
// Get All Categories
const getAllCategoriesController = async (_req, res) => {
    try {
        const allCategories = await (0, category_service_1.getAllCategories)();
        return (0, response_1.success)(res, allCategories, 'All categories fetched successfully');
    }
    catch (err) {
        return (0, response_1.error)(res, err.message || 'Failed to fetch categories');
    }
};
exports.getAllCategoriesController = getAllCategoriesController;
// Get Category by ID
const getCategoryByIdController = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const category = await (0, category_service_1.getCategoryById)(new mongoose_1.Types.ObjectId(categoryId));
        if (!category) {
            return (0, response_1.notFound)(res, 'Category not found');
        }
        return (0, response_1.success)(res, category, 'Category fetched successfully');
    }
    catch (err) {
        return (0, response_1.error)(res, err.message || 'Failed to fetch category');
    }
};
exports.getCategoryByIdController = getCategoryByIdController;
// Update Category
const updateCategoryController = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const updatedCategory = await (0, category_service_1.updateCategory)(new mongoose_1.Types.ObjectId(categoryId), req.body);
        if (!updatedCategory) {
            return (0, response_1.notFound)(res, 'Category not found');
        }
        return (0, response_1.success)(res, updatedCategory, 'Category updated successfully');
    }
    catch (err) {
        return (0, response_1.error)(res, err.message || 'Failed to update category');
    }
};
exports.updateCategoryController = updateCategoryController;
// Delete Category
const deleteCategoryController = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const deleted = await (0, category_service_1.deleteCategory)(new mongoose_1.Types.ObjectId(categoryId));
        if (!deleted) {
            return (0, response_1.notFound)(res, 'Category not found');
        }
        return (0, response_1.success)(res, null, 'Category deleted successfully');
    }
    catch (err) {
        return (0, response_1.error)(res, err.message || 'Failed to delete category');
    }
};
exports.deleteCategoryController = deleteCategoryController;
//Other details
const getCategoryDetails = async (req, res) => {
    try {
        const { categoryId } = req.params;
        if (!categoryId) {
            return (0, response_1.validationError)(res, ['Category ID is required']);
        }
        const category = await (0, category_service_1.getCategoryByIdPopulated)(categoryId);
        if (!category) {
            return (0, response_1.notFound)(res, 'Category not found');
        }
        const diffCategoryData = await (0, category_service_1.getOtherCategoryData)(categoryId);
        const topSellingCourses = await (0, category_service_1.getTopSellingCourses)(categoryId);
        return (0, response_1.success)(res, {
            category,
            diffCategoryData,
            topSellingCourses
        }, 'Category fetched successfully');
    }
    catch (err) {
        return (0, response_1.error)(res, err.message || 'Failed to fetch category details');
    }
};
exports.getCategoryDetails = getCategoryDetails;
//# sourceMappingURL=Category.js.map