import { Request, Response } from "express";
export declare const createCourse: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<{
    id: unknown;
}>, Record<string, any>>>;
export declare const updateCourse: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<{
    id: unknown;
}>, Record<string, any>>>;
export declare const deleteCourse: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<import("../models/Course").ICourse>, Record<string, any>>>;
export declare const showAllCourses: (_req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<(import("mongoose").Document<unknown, {}, import("../models/Course").ICourse, {}, {}> & import("../models/Course").ICourse & Required<{
    _id: unknown;
}> & {
    __v: number;
})[]>, Record<string, any>>>;
export declare const getCourseDetails: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<import("mongoose").Document<unknown, {}, import("../models/Course").ICourse, {}, {}> & import("../models/Course").ICourse & Required<{
    _id: unknown;
}> & {
    __v: number;
}>, Record<string, any>>>;
//# sourceMappingURL=Course.d.ts.map