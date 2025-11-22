import { Request, Response } from 'express';
export declare const updateProfile: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>>>;
export declare const getUserDetails: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<import("mongoose").Document<unknown, {}, import("../models/User").IUser, {}, {}> & import("../models/User").IUser & Required<{
    _id: unknown;
}> & {
    __v: number;
}>, Record<string, any>>>;
export declare const deleteAccount: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>>>;
//# sourceMappingURL=Profile.d.ts.map