import { Request, Response, NextFunction } from 'express';
import { ZodError, ZodType } from 'zod';
import { validationError, error } from '../utils/response';

interface ValidationSchemas {
    body?: ZodType;
    query?: ZodType;
    params?: ZodType;
}

export const validate = (schemas: ValidationSchemas) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        try {
            // Validate request body if schema is provided
            if (schemas.body) {
                const parsed = schemas.body.safeParse(req.body);
                if (!parsed.success) {
                    validationError(
                        res, 
                        parsed.error.issues, 
                        'Invalid request body'
                    );
                    return;
                }
                req.body = parsed.data;
            }

            // Validate query parameters if schema is provided
            if (schemas.query) {
                const parsed = schemas.query.safeParse(req.query);
                if (!parsed.success) {
                    validationError(
                        res, 
                        parsed.error.issues, 
                        'Invalid query parameters',
                    );
                    return;
                }
                req.query = parsed.data as any;
            }

            // Validate URL parameters if schema is provided
            if (schemas.params) {
                const parsed = schemas.params.safeParse(req.params);
                if (!parsed.success) {
                    validationError(
                        res, 
                        parsed.error.issues, 
                        'Invalid URL parameters',
                    );
                    return;
                }
                req.params = parsed.data as any;
            }

            next();
        } catch (err) {
            if (err instanceof ZodError) {
                validationError(
                    res, 
                    err.issues, 
                    'Validation error occurred'
                );
                return;
            }
            
            // Handle unexpected errors
            error(
                res,
                'Internal server error during validation',
                500,
                err instanceof Error ? err.message : 'Unknown error'
            );
        }
    };
};