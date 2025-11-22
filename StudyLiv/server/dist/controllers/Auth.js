"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassword = exports.login = exports.signUp = exports.sendOtp = void 0;
const otp_generator_1 = __importDefault(require("otp-generator"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const mailSender_1 = require("../utils/mailSender");
const env_validation_1 = require("../validations/env.validation");
const user_service_1 = require("../services/user.service");
const otp_service_1 = require("../services/otp.service");
const response_1 = require("../utils/response");
const recentOtps = new Set();
/**
 * @description Send OTP to user's email for verification
 * @route POST /auth/send-otp
 * @access Public
 */
const sendOtp = async (req, res) => {
    try {
        const { email } = req.body;
        // Validate email
        if (!email) {
            return (0, response_1.validationError)(res, ['Email is required']);
        }
        // Check if user already exists
        const existingUser = await (0, user_service_1.findUserByEmail)(email);
        if (existingUser) {
            return (0, response_1.error)(res, 'User already exists. Please sign in instead.', 400);
        }
        // Generate unique OTP
        let otp;
        do {
            otp = otp_generator_1.default.generate(6, {
                upperCaseAlphabets: false,
                specialChars: false,
                digits: true,
                lowerCaseAlphabets: false
            });
        } while (recentOtps.has(otp));
        // Store OTP temporarily
        recentOtps.add(otp);
        setTimeout(() => recentOtps.delete(otp), 5 * 60 * 1000); // 5 minutes expiration
        // Save OTP to database
        const dbOtp = await (0, otp_service_1.createOtp)({ email, otp });
        // Send OTP via email (in production)
        if (env_validation_1.ENV.NODE_ENV === 'production') {
            await (0, mailSender_1.mailSender)(email, 'Your OTP for StudyNotion', `Your OTP for verification is: ${otp}. It will expire in 5 minutes.`);
        }
        // In development, return the OTP for testing
        const responseData = env_validation_1.ENV.NODE_ENV === 'development'
            ? { otp: dbOtp.otp }
            : { message: 'OTP sent to your email' };
        return (0, response_1.success)(res, responseData, 'OTP generated successfully');
    }
    catch (err) {
        console.error('Error in sendOtp:', err);
        return (0, response_1.error)(res, 'Failed to send OTP', 500, err);
    }
};
exports.sendOtp = sendOtp;
/**
 * @description Register a new user
 * @route POST /auth/signup
 * @access Public
 */
const signUp = async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, password, confirmPassword, accountType, otp } = req.body;
        // Validate required fields
        const requiredFields = [
            'firstName',
            'lastName',
            'email',
            'phoneNumber',
            'password',
            'confirmPassword',
            'accountType',
            'otp'
        ];
        const missingFields = requiredFields.filter(field => !req.body[field]);
        if (missingFields.length > 0) {
            return (0, response_1.validationError)(res, missingFields.map(field => `${field} is required`));
        }
        // Check if passwords match
        if (password !== confirmPassword) {
            return (0, response_1.validationError)(res, ['Passwords do not match']);
        }
        // Check if user already exists
        const existingUser = await (0, user_service_1.findUserByEmail)(email);
        if (existingUser) {
            return (0, response_1.error)(res, 'User already exists. Please sign in instead.', 400);
        }
        // Verify OTP
        const verification = await (0, otp_service_1.verifyLatestOtp)(email, otp);
        if (!verification.ok) {
            return (0, response_1.error)(res, verification.reason || 'OTP verification failed', 400);
        }
        // Create user
        const user = await (0, user_service_1.createUserWithProfile)({
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            confirmPassword,
            accountType
        });
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email, accountType: user.accountType }, env_validation_1.ENV.JWT_SECRET, { expiresIn: '24h' });
        // Set cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: env_validation_1.ENV.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });
        // Return success response without sensitive data
        const userResponse = {
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            accountType: user.accountType
        };
        return (0, response_1.success)(res, { user: userResponse, token }, 'User registered successfully');
    }
    catch (err) {
        console.error('Error in signUp:', err);
        return (0, response_1.error)(res, 'Failed to register user', 500, err);
    }
};
exports.signUp = signUp;
/**
 * @description Authenticate user and return JWT token
 * @route POST /auth/login
 * @access Public
 */
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Validate input
        if (!email || !password) {
            return (0, response_1.validationError)(res, ['Email and password are required']);
        }
        // Check if user exists
        const user = await (0, user_service_1.findUserByEmail)(email);
        if (!user) {
            return (0, response_1.error)(res, 'Invalid credentials', 401);
        }
        // Verify password
        const isPasswordValid = await bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            return (0, response_1.error)(res, 'Invalid credentials', 401);
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email, accountType: user.accountType }, env_validation_1.ENV.JWT_SECRET, { expiresIn: '24h' });
        // Set cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: env_validation_1.ENV.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });
        // Return user data without sensitive information
        const userResponse = {
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            accountType: user.accountType
        };
        return (0, response_1.success)(res, { user: userResponse, token }, 'Login successful');
        ;
    }
    catch (err) {
        console.error('Error in login:', err);
        return (0, response_1.error)(res, 'Login failed', 500, err);
    }
};
exports.login = login;
const changePassword = async (req, res) => {
    try {
        const { email, oldPassword, newPassword, confirmNewPassword } = req.body;
        if (!email
            || !oldPassword
            || !newPassword
            || !confirmNewPassword)
            return (0, response_1.validationError)(res, ['All fields are required']);
        const user = await (0, user_service_1.findUserByEmail)(email);
        if (!user)
            return (0, response_1.error)(res, 'User not found', 404);
        if (!(await bcrypt_1.default.compare(oldPassword, user.password)))
            return (0, response_1.error)(res, 'Old password is incorrect', 401);
        if (oldPassword === newPassword)
            return (0, response_1.error)(res, 'Enter new password', 400);
        if (newPassword !== confirmNewPassword)
            return (0, response_1.error)(res, 'Passwords not matching', 400);
        let hashedNewPassword;
        try {
            hashedNewPassword = await bcrypt_1.default.hash(newPassword, 12);
        }
        catch (err) {
            return (0, response_1.error)(res, 'Error in hashing password', 500, err);
        }
        const updatedUser = await (0, user_service_1.updateUserPasswordByEmail)(email, hashedNewPassword);
        await (0, mailSender_1.mailSender)(email, 'Password changed successfully', 'Your password is changed.');
        return (0, response_1.success)(res, { message: 'Password changed successfully', data: updatedUser });
    }
    catch (err) {
        console.error('Error in changePassword:', err);
        return (0, response_1.error)(res, 'Failed to change password', 500, err);
    }
};
exports.changePassword = changePassword;
//# sourceMappingURL=Auth.js.map