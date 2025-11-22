import { Request, Response } from 'express';
export declare const capturePayment: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<{
    courseName: string;
    courseDescription: string | undefined;
    thumbnail: string | undefined;
    orderId: string;
    currency: string;
    amount: string | number;
}>, Record<string, any>>>;
export declare const verifySignature: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<{
    courseId: any;
    userId: any;
}>, Record<string, any>>>;
//# sourceMappingURL=Payments.d.ts.map