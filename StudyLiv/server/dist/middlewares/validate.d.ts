import { Request, Response, NextFunction } from 'express';
import { ZodType } from 'zod';
interface ValidationSchemas {
    body?: ZodType;
    query?: ZodType;
    params?: ZodType;
}
export declare const validate: (schemas: ValidationSchemas) => (req: Request, res: Response, next: NextFunction) => void;
export {};
//# sourceMappingURL=validate.d.ts.map