import otpGenerator from 'otp-generator';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
// import { mailSender } from '../utils/mailSender';
import { ENV as env } from '../validations/env.validation';
import { 
    createUserWithProfile, 
    findUserByEmail, 
    updateUserPasswordByEmail
} from '../services/user.service';
import { createOtp, verifyLatestOtp } from '../services/otp.service';
import { 
    success, 
    error, 
    validationError 
} from '../utils/response';

const recentOtps = new Set<string>();
// {
//     "firstName": "Anuj",
//     "lastName": "Naruka",
//     "email": "anujnaruka28@gmail.com",
//     "phoneNumber": "9213774226",
//     "accountType": "Student",
//     "password": "qwerty2810",
//     "confirmPassword": "qwerty2810"
// }
/**
 * @description Send OTP to user's email for verification
 * @route GET /auth/send-otp
 * @access Public
 */
export const sendOtp = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        
        // Validate email
        if (!email) {
            return validationError(res, ['Email is required']);
        }

        // Check if user already exists
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return error(res, 'User already exists. Please sign in instead.', 400);
        }

        // Generate unique OTP
        let otp: string;
        do {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                specialChars: false,
                digits: true,
                lowerCaseAlphabets: false
            });
        } while (recentOtps.has(otp));
        console.log('Otp: ',otp);
        // Store OTP temporarily
        recentOtps.add(otp);
        setTimeout(() => recentOtps.delete(otp), 5 * 60 * 1000); // 5 minutes expiration

        // Save OTP to database
        const dbOtp = await createOtp({ email, otp });

        // Send OTP via email (in production)
        // if (env.NODE_ENV === 'production') {
        //     await mailSender(
        //         email,
        //         'Your OTP for StudyNotion',
        //         `Your OTP for verification is: ${otp}. It will expire in 5 minutes.`
        //     );
        // }

        // In development, return the OTP for testing
        const responseData = env.NODE_ENV === 'development'
            ? { otp: dbOtp.otp }
            : { message: 'OTP sent to your email' };

        return success(res, responseData, 'OTP generated successfully');

    } catch (err) {
        console.error('Error in sendOtp:', err);
        return error(res, 'Failed to send OTP', 500, err);
    }
};

/**
 * @description Register a new user
 * @route POST /auth/signup
 * @access Public
 */
export const signUp = async (req: Request, res: Response) => {
    try {
        const {
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            confirmPassword,
            accountType,
            otp
        } = req.body;

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
            return validationError(
                res,
                missingFields.map(field => `${field} is required`)
            );
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return validationError(res, ['Passwords do not match']);
        }

        // Check if user already exists
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return error(res, 'User already exists. Please sign in instead.', 400);
        }

        // Verify OTP
        const verification = await verifyLatestOtp(email, otp);
        if (!verification.ok) {
            return error(res, verification.reason || 'OTP verification failed', 400);
        }

        // Create user
        const user = await createUserWithProfile({
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            confirmPassword,
            accountType
        });

        // Generate JWT token
        // const token = jwt.sign(
        //     { id: user._id, email: user.email, accountType: user.accountType },
        //     env.JWT_SECRET,
        //     { expiresIn: '24h' }
        // );

        // // Set cookie
        // res.cookie('token', token, {
        //     httpOnly: true,
        //     secure: env.NODE_ENV === 'production',
        //     maxAge: 24 * 60 * 60 * 1000 // 24 hours
        // });

        // Return success response without sensitive data
        // const userResponse = {
        //     id: user._id,
        //     email: user.email,
        //     firstName: user.firstName,
        //     lastName: user.lastName,
        //     accountType: user.accountType
        // };

        return success(res, { user: user }, 'User registered successfully');

    } catch (err) {
        console.error('Error in signUp:', err);
        return error(res, 'Failed to register user', 500, err);
    }
};

/**
 * @description Authenticate user and return JWT token
 * @route POST /auth/login
 * @access Public
 */
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return validationError(res, ['Email and password are required']);
        }

        // Check if user exists
        const user = await findUserByEmail(email);
        if (!user) {
            return error(res, 'Invalid credentials', 401);
        }

        // Debug logs
        console.log('Login Debug Info:');
        console.log('Email:', email);
        console.log('Password provided:', password);
        console.log('User found:', !!user);
        console.log('Stored password hash:', user.password);
        console.log('Password length:', password.length);
        console.log('Hash length:', user.password.length);
        console.log('Hash starts with $2b$:', user.password.startsWith('$2b$'));
        console.log('Hash starts with $2a$:', user.password.startsWith('$2a$'));
        
        // Test manual hash generation
        const testHash = await bcrypt.hash(password, 12);
        console.log('Fresh hash of same password:', testHash);
        console.log('Fresh hash comparison:', await bcrypt.compare(password, testHash));

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log('Password comparison result:', isPasswordValid);
        
        if (!isPasswordValid) {
            return error(res, 'Invalid credentials', 401);
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, email: user.email, accountType: user.accountType },
            env.JWT_SECRET,
            { expiresIn: '48h' }
        );

        // Set cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: env.NODE_ENV === 'production',
            maxAge: 48 * 60 * 60 * 1000 // 48 hours
        });

        // Return user data without sensitive information
        const userResponse = {
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            accountType: user.accountType,
            token: token
        };

        return success(res, { user: userResponse }, 'Login successful');;

    } catch (err) {
        console.error('Error in login:', err);
        return error(res, 'Login failed', 500, err);
    }
};

export const changePassword = async (req: Request, res: Response) => {

    try {
        const {
            email,
            oldPassword,
            newPassword,
            confirmNewPassword
        } = req.body;

        if (
            !email
            || !oldPassword
            || !newPassword
            || !confirmNewPassword
        ) return validationError(res, ['All fields are required']);

        const user = await findUserByEmail(email);
        if (!user) return error(res, 'User not found', 404);
        
        // Debug logs for changePassword
        console.log('ChangePassword Debug Info:');
        console.log('Email:', email);
        console.log('Old password provided:', oldPassword);
        console.log('User found:', !!user);
        console.log('Stored password hash:', user.password);
        console.log('Old password length:', oldPassword.length);
        console.log('Hash length:', user.password.length);
        
        // console.log('User', user);
        const passwordMatch = await bcrypt.compare(oldPassword, user.password);
        console.log('Password comparison result:', passwordMatch);
        
        if (!passwordMatch) return error(res, 'Old password is incorrect', 401);
        if (oldPassword === newPassword) return error(res, 'Enter new password', 400);
        if (newPassword !== confirmNewPassword) return error(res, 'Passwords not matching', 400);

        let hashedNewPassword;
        try {
            hashedNewPassword = await bcrypt.hash(newPassword, 10);
        } catch (err: any) {

            return error(res, 'Error in hashing password', 500, err);

        }

        const updatedUser = await updateUserPasswordByEmail(email, hashedNewPassword);

        // await mailSender(email, 'Password changed successfully', 'Your password is changed.');
        return success(res, { message: 'Password changed successfully', data: updatedUser });

    } catch (err) {
        console.error('Error in changePassword:', err);
        return error(res, 'Failed to change password', 500, err);
    }

};
