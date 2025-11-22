import { Types } from "mongoose";
import { IUser } from "../models/User";
import { UserInput } from "../validations/user.validation";
export declare const findUserById: (userId: Types.ObjectId) => Promise<IUser | null>;
export declare const deleteUserById: (userId: string) => Promise<IUser | null>;
export declare const populateUserWithProfile: (userId: string) => Promise<(import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
    _id: unknown;
}> & {
    __v: number;
}) | null>;
export declare const addCourseToStudent: (userId: string, courseId: string) => Promise<IUser | null>;
export declare const findUserByEmail: (email: string) => Promise<IUser | null>;
export declare const createUserWithProfile: (params: UserInput) => Promise<IUser>;
/**
 * Update user's password by email
 */
export declare const updateUserPasswordByEmail: (email: string, hashedPassword: string) => Promise<IUser | null>;
/**
 * Set password reset token for a user
 */
export declare const setPasswordResetToken: (email: string, token: string, expiresAt: Date) => Promise<IUser | null>;
/**
 * Find user by reset token and check if it's valid
 */
export declare const findUserByResetToken: (token: string) => Promise<IUser | null>;
/**
 * Generate a random token for password reset
 */
export declare const generateResetToken: () => string;
/**
 * Hash a password
 */
export declare const hashPassword: (password: string) => Promise<string>;
//# sourceMappingURL=user.service.d.ts.map