import { Response } from 'express';
import {ENV as env} from '../validations/env.validation';
// This interface is used to type the response object
// It's exported for use in other files
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
// This function sends a success response
// It's typed to ensure the response matches the ApiResponse interface
export const success = <T>(
  res: Response,
  data: T | null = null,
  message: string = 'Request successful',
  statusCode: number = 200
): Response<ApiResponse<T>> => {
  return res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

/**
 * Send an error response
 * @param res - Express Response object
 * @param message - Error message to send to the client
 * @param statusCode - HTTP status code (default: 500)
 * @param errorDetails - Additional error details (only shown in development)
 * @returns Express Response with error details
 */
export const error = <T = null>(
  res: Response,
  message: string = 'An error occurred',
  statusCode: number = 500,
  errorDetails?: any
): Response<ApiResponse<T>> => {
  const response: ApiResponse<T> = {
    success: false,
    message
  };

  // Only include error details in development
  if (env.NODE_ENV === 'development' && errorDetails) {
    response.error = errorDetails instanceof Error ? errorDetails.message : errorDetails;
  }

  return res.status(statusCode).json(response);
};

/**
 * Send a validation error response
 * @param res - Express Response object
 * @param errors - Array of validation errors
 * @param message - Custom error message (default: 'Validation failed')
 * @returns Express Response with validation errors
 */
export const validationError = <T = null>(
  res: Response,
  errors: any[] = [],
  message: string = 'Validation failed'
): Response<ApiResponse<T>> => {
  return res.status(400).json({
    success: false,
    message,
    errors
  });
};

/**
 * Send a not found response (404)
 * @param res - Express Response object
 * @param message - Custom error message (default: 'Resource not found')
 * @returns Express Response with 404 status
 */
export const notFound = <T = null>(
  res: Response,
  message: string = 'Resource not found'
): Response<ApiResponse<T>> => {
  return error<T>(res, message, 404);
};

/**
 * Send an unauthorized response (401)
 * @param res - Express Response object
 * @param message - Custom error message (default: 'Unauthorized access')
 * @returns Express Response with 401 status
 */
export const unauthorized = <T = null>(
  res: Response,
  message: string = 'Unauthorized access'
): Response<ApiResponse<T>> => {
  return error<T>(res, message, 401);
};

/**
 * Send a forbidden response (403)
 * @param res - Express Response object
 * @param message - Custom error message (default: 'Forbidden access')
 * @returns Express Response with 403 status
 */
export const forbidden = <T = null>(
  res: Response,
  message: string = 'Forbidden access'
): Response<ApiResponse<T>> => {
  return error<T>(res, message, 403);
};

export default {
  success,
  error,
  validationError,
  notFound,
  unauthorized,
  forbidden
};
