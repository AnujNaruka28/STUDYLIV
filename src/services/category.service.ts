import Category, { ICategory } from "../models/Category";
import { CategoryInput } from "../validations/category.validation";
import { Types } from "mongoose";

// Create a new category
export const createCategory = async (categoryData: CategoryInput): Promise<ICategory> => {
    const { name, description } = categoryData;
    
    // Check if category already exists
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
        throw new Error('Category already exists');
    }
    
    const categoryDetails = await Category.create({
        name,
        description
    });
    
    return categoryDetails;
};

// Get all categories
export const getAllCategories = async (): Promise<ICategory[]> => {
    const allCategories = await Category.find({}, { name: true, description: true });
    return allCategories;
};

// Get single category by ID
export const getCategoryById = async (categoryId: Types.ObjectId): Promise<ICategory | null> => {
    const category = await Category.findById(categoryId);
    return category;
};

// Get single category by name
export const getCategoryByName = async (name: string): Promise<ICategory | null> => {
    const category = await Category.findOne({ name });
    return category;
};

// Update category
export const updateCategory = async (
    categoryId: Types.ObjectId, 
    updateData: Partial<CategoryInput>
): Promise<ICategory | null> => {
    const updatedCategory = await Category.findByIdAndUpdate(
        categoryId,
        updateData,
        { new: true }
    );
    return updatedCategory;
};

// Delete category
export const deleteCategory = async (categoryId: Types.ObjectId): Promise<boolean> => {
    const result = await Category.findByIdAndDelete(categoryId);
    return !!result;
};

// Add course to category
export const addCourseToCategory = async (
    categoryId: string, 
    courseId: string
): Promise<ICategory | null> => {
    const updatedCategory = await Category.findByIdAndUpdate(
        categoryId,
        { $push: { courses: courseId } },
        { new: true }
    );
    return updatedCategory;
};

// Remove course from category
export const removeCourseFromCategory = async (
    categoryId: Types.ObjectId, 
    courseId: Types.ObjectId
): Promise<ICategory | null> => {
    const updatedCategory = await Category.findByIdAndUpdate(
        categoryId,
        { $pull: { courses: courseId } },
        { new: true }
    );
    return updatedCategory;
};

// Get category details with populated courses
export const getCategoryByIdPopulated = async (categoryId: string): Promise<ICategory | null> => {
    return await Category.findById(categoryId).populate('courses').exec();
};

export const getOtherCategoryData = async (categoryId: string): Promise<ICategory[] | null> => {
    return await Category.find({_id: {$ne: categoryId}}).populate('courses').exec();
}

export const getTopSellingCourses = async (categoryId: string): Promise<ICategory[] | null> => {
    return await Category.find(
        {_id: categoryId},
        {courses: true}
    ).populate({
        path: 'courses',
        options: {
            sort: {studentsEnrolled: -1}
        }
    }).select('courses').exec();
}
