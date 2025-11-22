import { ICategory } from "../models/Category";
import { CategoryInput } from "../validations/category.validation";
import { Types } from "mongoose";
export declare const createCategory: (categoryData: CategoryInput) => Promise<ICategory>;
export declare const getAllCategories: () => Promise<ICategory[]>;
export declare const getCategoryById: (categoryId: Types.ObjectId) => Promise<ICategory | null>;
export declare const getCategoryByName: (name: string) => Promise<ICategory | null>;
export declare const updateCategory: (categoryId: Types.ObjectId, updateData: Partial<CategoryInput>) => Promise<ICategory | null>;
export declare const deleteCategory: (categoryId: Types.ObjectId) => Promise<boolean>;
export declare const addCourseToCategory: (categoryId: string, courseId: string) => Promise<ICategory | null>;
export declare const removeCourseFromCategory: (categoryId: Types.ObjectId, courseId: Types.ObjectId) => Promise<ICategory | null>;
export declare const getCategoryByIdPopulated: (categoryId: string) => Promise<ICategory | null>;
export declare const getOtherCategoryData: (categoryId: string) => Promise<ICategory[] | null>;
export declare const getTopSellingCourses: (categoryId: string) => Promise<ICategory[] | null>;
//# sourceMappingURL=category.service.d.ts.map