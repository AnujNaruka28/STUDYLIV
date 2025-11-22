import { Response } from 'express';
export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
    error?: any;
    errors?: any[];
}
/**
 * Send a success response
 */
export declare const success: <T>(res: Response, data?: T | null, message?: string, statusCode?: number) => Response<ApiResponse<T>>;
/**
 * Send an error response
 * @param res - Express Response object
 * @param message - Error message to send to the client
 * @param statusCode - HTTP status code (default: 500)
 * @param errorDetails - Additional error details (only shown in development)
 * @returns Express Response with error details
 */
export declare const error: <T = null>(res: Response, message?: string, statusCode?: number, errorDetails?: any) => Response<ApiResponse<T>>;
/**
 * Send a validation error response
 * @param res - Express Response object
 * @param errors - Array of validation errors
 * @param message - Custom error message (default: 'Validation failed')
 * @returns Express Response with validation errors
 */
export declare const validationError: <T = null>(res: Response, errors?: any[], message?: string) => Response<ApiResponse<T>>;
/**
 * Send a not found response (404)
 * @param res - Express Response object
 * @param message - Custom error message (default: 'Resource not found')
 * @returns Express Response with 404 status
 */
export declare const notFound: <T = null>(res: Response, message?: string) => Response<ApiResponse<T>>;
/**
 * Send an unauthorized response (401)
 * @param res - Express Response object
 * @param message - Custom error message (default: 'Unauthorized access')
 * @returns Express Response with 401 status
 */
export declare const unauthorized: <T = null>(res: Response, message?: string) => Response<ApiResponse<T>>;
/**
 * Send a forbidden response (403)
 * @param res - Express Response object
 * @param message - Custom error message (default: 'Forbidden access')
 * @returns Express Response with 403 status
 */
export declare const forbidden: <T = null>(res: Response, message?: string) => Response<ApiResponse<T>>;
declare const _default: {
    success: <T>(res: Response, data?: T | null, message?: string, statusCode?: number) => Response<ApiResponse<T>>;
    error: <T = null>(res: Response, message?: string, statusCode?: number, errorDetails?: any) => Response<ApiResponse<T>>;
    validationError: <T = null>(res: Response, errors?: any[], message?: string) => Response<ApiResponse<T>>;
    notFound: <T = null>(res: Response, message?: string) => Response<ApiResponse<T>>;
    unauthorized: <T = null>(res: Response, message?: string) => Response<ApiResponse<T>>;
    forbidden: <T = null>(res: Response, message?: string) => Response<ApiResponse<T>>;
};
export default _default;
//# sourceMappingURL=response.d.ts.map