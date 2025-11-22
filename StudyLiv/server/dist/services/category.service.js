"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTopSellingCourses = exports.getOtherCategoryData = exports.getCategoryByIdPopulated = exports.removeCourseFromCategory = exports.addCourseToCategory = exports.deleteCategory = exports.updateCategory = exports.getCategoryByName = exports.getCategoryById = exports.getAllCategories = exports.createCategory = void 0;
const Category_1 = __importDefault(require("../models/Category"));
// Create a new category
const createCategory = async (categoryData) => {
    const { name, description } = categoryData;
    // Check if category already exists
    const existingCategory = await Category_1.default.findOne({ name });
    if (existingCategory) {
        throw new Error('Category already exists');
    }
    const categoryDetails = await Category_1.default.create({
        name,
        description
    });
    return categoryDetails;
};
exports.createCategory = createCategory;
// Get all categories
const getAllCategories = async () => {
    const allCategories = await Category_1.default.find({}, { name: true, description: true });
    return allCategories;
};
exports.getAllCategories = getAllCategories;
// Get single category by ID
const getCategoryById = async (categoryId) => {
    const category = await Category_1.default.findById(categoryId);
    return category;
};
exports.getCategoryById = getCategoryById;
// Get single category by name
const getCategoryByName = async (name) => {
    const category = await Category_1.default.findOne({ name });
    return category;
};
exports.getCategoryByName = getCategoryByName;
// Update category
const updateCategory = async (categoryId, updateData) => {
    const updatedCategory = await Category_1.default.findByIdAndUpdate(categoryId, updateData, { new: true });
    return updatedCategory;
};
exports.updateCategory = updateCategory;
// Delete category
const deleteCategory = async (categoryId) => {
    const result = await Category_1.default.findByIdAndDelete(categoryId);
    return !!result;
};
exports.deleteCategory = deleteCategory;
// Add course to category
const addCourseToCategory = async (categoryId, courseId) => {
    const updatedCategory = await Category_1.default.findByIdAndUpdate(categoryId, { $push: { courses: courseId } }, { new: true });
    return updatedCategory;
};
exports.addCourseToCategory = addCourseToCategory;
// Remove course from category
const removeCourseFromCategory = async (categoryId, courseId) => {
    const updatedCategory = await Category_1.default.findByIdAndUpdate(categoryId, { $pull: { courses: courseId } }, { new: true });
    return updatedCategory;
};
exports.removeCourseFromCategory = removeCourseFromCategory;
// Get category details with populated courses
const getCategoryByIdPopulated = async (categoryId) => {
    return await Category_1.default.findById(categoryId).populate('courses').exec();
};
exports.getCategoryByIdPopulated = getCategoryByIdPopulated;
const getOtherCategoryData = async (categoryId) => {
    return await Category_1.default.find({ _id: { $ne: categoryId } }).populate('courses').exec();
};
exports.getOtherCategoryData = getOtherCategoryData;
const getTopSellingCourses = async (categoryId) => {
    return await Category_1.default.find({ _id: categoryId }, { courses: true }).populate({
        path: 'course',
        options: {
            sort: { studentsEnrolled: -1 }
        }
    }).select('courses').exec();
};
exports.getTopSellingCourses = getTopSellingCourses;
//# sourceMappingURL=category.service.js.map