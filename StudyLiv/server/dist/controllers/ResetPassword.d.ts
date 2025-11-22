import { Request, Response } from 'express';
/**
 * @description Generate and send reset password token
 * @route POST /auth/forgot-password
 * @access Public
 */
export declare const resetPasswordToken: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>>>;
/**
 * @description Reset user password using token
 * @route POST /auth/reset-password/:token
 * @access Public
 */
export declare const resetPassword: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>>>;
declare const _default: {
    resetPasswordToken: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>>>;
    resetPassword: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>>>;
};
export default _default;
//# sourceMappingURL=ResetPassword.d.ts.map