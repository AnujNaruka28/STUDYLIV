import { Request, Response, NextFunction } from 'express';
export declare const auth: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<import("../utils/response").ApiResponse<null>, Record<string, any>>>;
/**
 * Middleware to check if user is an admin
 */
export declare const isAdmin: (req: Request, res: Response, next: NextFunction) => void | Response<import("../utils/response").ApiResponse<null>, Record<string, any>>;
/**
 * Middleware to check if user is a student
 */
export declare const isStudent: (req: Request, res: Response, next: NextFunction) => void | Response<import("../utils/response").ApiResponse<null>, Record<string, any>>;
/**
 * Middleware to check if user is an instructor
 */
export declare const isInstructor: (req: Request, res: Response, next: NextFunction) => void | Response<import("../utils/response").ApiResponse<null>, Record<string, any>>;
//# sourceMappingURL=auth.d.ts.map