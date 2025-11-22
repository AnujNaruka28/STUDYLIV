"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const zod_1 = require("zod");
const response_1 = require("../utils/response");
const validate = (schemas) => {
    return (req, res, next) => {
        try {
            // Validate request body if schema is provided
            if (schemas.body) {
                const parsed = schemas.body.safeParse(req.body);
                if (!parsed.success) {
                    (0, response_1.validationError)(res, parsed.error.issues, 'Invalid request body');
                    return;
                }
                req.body = parsed.data;
            }
            // Validate query parameters if schema is provided
            if (schemas.query) {
                const parsed = schemas.query.safeParse(req.query);
                if (!parsed.success) {
                    (0, response_1.validationError)(res, parsed.error.issues, 'Invalid query parameters');
                    return;
                }
                req.query = parsed.data;
            }
            // Validate URL parameters if schema is provided
            if (schemas.params) {
                const parsed = schemas.params.safeParse(req.params);
                if (!parsed.success) {
                    (0, response_1.validationError)(res, parsed.error.issues, 'Invalid URL parameters');
                    return;
                }
                req.params = parsed.data;
            }
            next();
        }
        catch (err) {
            if (err instanceof zod_1.ZodError) {
                (0, response_1.validationError)(res, err.issues, 'Validation error occurred');
                return;
            }
            // Handle unexpected errors
            (0, response_1.error)(res, 'Internal server error during validation', 500, err instanceof Error ? err.message : 'Unknown error');
        }
    };
};
exports.validate = validate;
//# sourceMappingURL=validate.js.map