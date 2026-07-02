import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ENV as env } from '../validations/env.validation';
import { unauthorized, error, forbidden } from '../utils/response';
import { CustomRequest } from '../types/CustomRequest';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Safely extract token from multiple sources
        let token = req.body?.token || req.cookies?.token;
        
        // Handle Authorization header safely
        const authHeader = req.header('Authorization');
        if (!token && authHeader && authHeader.startsWith('Bearer ')) {
            token = authHeader.replace('Bearer ', '');
        }

        if (!token) {
            return unauthorized(res, 'Authentication required: No token provided');
        }

        try {
            const payload = jwt.verify(token, env.JWT_SECRET) as { 
                id: string; 
                email: string; 
                accountType: 'Admin' | 'Student' | 'Instructor';
                iat?: number;
                exp?: number;
            };
            
            (req as CustomRequest).user = {
                id: payload.id,
                email: payload.email,
                accountType: payload.accountType
            };

            return next();
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            return unauthorized(
                res, 
                `Invalid or expired token: ${errorMessage}`
            );
        }
    } catch (err) {
        return error(
            res,
            'Authentication error',
            500,
            err instanceof Error ? err.message : 'Unknown error'
        );
    }
};

/**
 * Middleware to check if user is an admin
 */
export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    try {
        if ((req as CustomRequest).user?.accountType !== 'Admin') {
            return forbidden(res, 'Access denied: Admin privileges required');
        }
        return next();
    } catch (err) {
        return error(
            res,
            'Authorization error',
            500,
            err instanceof Error ? err.message : 'Unknown error'
        );
    }
};

/**
 * Middleware to check if user is a student
 */
export const isStudent = (req: Request, res: Response, next: NextFunction) => {
    try {
        if ((req as CustomRequest).user?.accountType !== 'Student') {
            return forbidden(res, 'Access denied: Student account required');
        }
        return next();
    } catch (err) {
        return error(
            res,
            'Authorization error',
            500,
            err instanceof Error ? err.message : 'Unknown error'
        );
    }
};

/**
 * Middleware to check if user is an instructor
 */
export const isInstructor = (req: Request, res: Response, next: NextFunction) => {
    try {
        if ((req as CustomRequest).user?.accountType !== 'Instructor') {
            return forbidden(res, 'Access denied: Instructor privileges required');
        }
        return next();
    } catch (err) {
        return error(
            res,
            'Authorization error',
            500,
            err instanceof Error ? err.message : 'Unknown error'
        );
    }
};