"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInstructor = exports.isStudent = exports.isAdmin = exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_validation_1 = require("../validations/env.validation");
const response_1 = require("../utils/response");
const auth = async (req, res, next) => {
    try {
        const token = req.body.token ||
            req.cookies?.token ||
            req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return (0, response_1.unauthorized)(res, 'Authentication required: No token provided');
        }
        try {
            const payload = jsonwebtoken_1.default.verify(token, env_validation_1.ENV.JWT_SECRET);
            req.user = {
                id: payload.id,
                email: payload.email,
                accountType: payload.accountType
            };
            return next();
        }
        catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            return (0, response_1.unauthorized)(res, `Invalid or expired token: ${errorMessage}`);
        }
    }
    catch (err) {
        return (0, response_1.error)(res, 'Authentication error', 500, err instanceof Error ? err.message : 'Unknown error');
    }
};
exports.auth = auth;
/**
 * Middleware to check if user is an admin
 */
const isAdmin = (req, res, next) => {
    try {
        if (req.user?.accountType !== 'Admin') {
            return (0, response_1.forbidden)(res, 'Access denied: Admin privileges required');
        }
        return next();
    }
    catch (err) {
        return (0, response_1.error)(res, 'Authorization error', 500, err instanceof Error ? err.message : 'Unknown error');
    }
};
exports.isAdmin = isAdmin;
/**
 * Middleware to check if user is a student
 */
const isStudent = (req, res, next) => {
    try {
        if (req.user?.accountType !== 'Student') {
            return (0, response_1.forbidden)(res, 'Access denied: Student account required');
        }
        return next();
    }
    catch (err) {
        return (0, response_1.error)(res, 'Authorization error', 500, err instanceof Error ? err.message : 'Unknown error');
    }
};
exports.isStudent = isStudent;
/**
 * Middleware to check if user is an instructor
 */
const isInstructor = (req, res, next) => {
    try {
        if (req.user?.accountType !== 'Instructor') {
            return (0, response_1.forbidden)(res, 'Access denied: Instructor privileges required');
        }
        return next();
    }
    catch (err) {
        return (0, response_1.error)(res, 'Authorization error', 500, err instanceof Error ? err.message : 'Unknown error');
    }
};
exports.isInstructor = isInstructor;
//# sourceMappingURL=auth.js.map