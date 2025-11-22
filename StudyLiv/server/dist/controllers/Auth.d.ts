import { Request, Response } from 'express';
/**
 * @description Send OTP to user's email for verification
 * @route POST /auth/send-otp
 * @access Public
 */
export declare const sendOtp: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<{
    otp: string;
    message?: never;
} | {
    message: string;
    otp?: never;
}>, Record<string, any>>>;
/**
 * @description Register a new user
 * @route POST /auth/signup
 * @access Public
 */
export declare const signUp: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<{
    user: {
        id: unknown;
        email: string;
        firstName: string;
        lastName: string;
        accountType: "Admin" | "Student" | "Instructor";
    };
    token: string;
}>, Record<string, any>>>;
/**
 * @description Authenticate user and return JWT token
 * @route POST /auth/login
 * @access Public
 */
export declare const login: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<{
    user: {
        id: unknown;
        email: string;
        firstName: string;
        lastName: string;
        accountType: "Admin" | "Student" | "Instructor";
    };
    token: string;
}>, Record<string, any>>>;
export declare const changePassword: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<{
    message: string;
    data: import("../models/User").IUser | null;
}>, Record<string, any>>>;
//# sourceMappingURL=Auth.d.ts.map