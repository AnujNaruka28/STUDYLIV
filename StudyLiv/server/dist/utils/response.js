"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forbidden = exports.unauthorized = exports.notFound = exports.validationError = exports.error = exports.success = void 0;
const env_validation_1 = require("../validations/env.validation");
/**
 * Send a success response
 */
// This function sends a success response
// It's typed to ensure the response matches the ApiResponse interface
const success = (res, data = null, message = 'Request successful', statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data
    });
};
exports.success = success;
/**
 * Send an error response
 * @param res - Express Response object
 * @param message - Error message to send to the client
 * @param statusCode - HTTP status code (default: 500)
 * @param errorDetails - Additional error details (only shown in development)
 * @returns Express Response with error details
 */
const error = (res, message = 'An error occurred', statusCode = 500, errorDetails) => {
    const response = {
        success: false,
        message
    };
    // Only include error details in development
    if (env_validation_1.ENV.NODE_ENV === 'development' && errorDetails) {
        response.error = errorDetails instanceof Error ? errorDetails.message : errorDetails;
    }
    return res.status(statusCode).json(response);
};
exports.error = error;
/**
 * Send a validation error response
 * @param res - Express Response object
 * @param errors - Array of validation errors
 * @param message - Custom error message (default: 'Validation failed')
 * @returns Express Response with validation errors
 */
const validationError = (res, errors = [], message = 'Validation failed') => {
    return res.status(400).json({
        success: false,
        message,
        errors
    });
};
exports.validationError = validationError;
/**
 * Send a not found response (404)
 * @param res - Express Response object
 * @param message - Custom error message (default: 'Resource not found')
 * @returns Express Response with 404 status
 */
const notFound = (res, message = 'Resource not found') => {
    return (0, exports.error)(res, message, 404);
};
exports.notFound = notFound;
/**
 * Send an unauthorized response (401)
 * @param res - Express Response object
 * @param message - Custom error message (default: 'Unauthorized access')
 * @returns Express Response with 401 status
 */
const unauthorized = (res, message = 'Unauthorized access') => {
    return (0, exports.error)(res, message, 401);
};
exports.unauthorized = unauthorized;
/**
 * Send a forbidden response (403)
 * @param res - Express Response object
 * @param message - Custom error message (default: 'Forbidden access')
 * @returns Express Response with 403 status
 */
const forbidden = (res, message = 'Forbidden access') => {
    return (0, exports.error)(res, message, 403);
};
exports.forbidden = forbidden;
exports.default = {
    success: exports.success,
    error: exports.error,
    validationError: exports.validationError,
    notFound: exports.notFound,
    unauthorized: exports.unauthorized,
    forbidden: exports.forbidden
};
//# sourceMappingURL=response.js.map