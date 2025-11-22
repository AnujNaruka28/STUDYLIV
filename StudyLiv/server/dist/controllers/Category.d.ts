import { Request, Response } from "express";
export declare const createCategoryController: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<import("../models/Category").ICategory>, Record<string, any>>>;
export declare const getAllCategoriesController: (_req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<import("../models/Category").ICategory[]>, Record<string, any>>>;
export declare const getCategoryByIdController: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<import("../models/Category").ICategory>, Record<string, any>>>;
export declare const updateCategoryController: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<import("../models/Category").ICategory>, Record<string, any>>>;
export declare const deleteCategoryController: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>>>;
export declare const getCategoryDetails: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<{
    category: import("../models/Category").ICategory;
    diffCategoryData: import("../models/Category").ICategory[] | null;
    topSellingCourses: import("../models/Category").ICategory[] | null;
}>, Record<string, any>>>;
//# sourceMappingURL=Category.d.ts.map