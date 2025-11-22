import { Request, Response } from 'express';
export declare const createSectionController: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<{
    section: import("../models/Section").ISection;
    updatedCourse: any;
}>, Record<string, any>>>;
export declare const updateSectionController: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<import("../models/Section").ISection>, Record<string, any>>>;
export declare const deleteSectionController: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<{
    deletedSection: import("../models/Section").ISection;
    updatedCourse: any;
}>, Record<string, any>>>;
export declare const getSectionByIdController: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<import("../models/Section").ISection>, Record<string, any>>>;
export declare const getSectionsByCourseIdController: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<import("../models/Section").ISection[]>, Record<string, any>>>;
//# sourceMappingURL=Section.d.ts.map