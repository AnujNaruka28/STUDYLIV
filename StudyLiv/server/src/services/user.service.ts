import User, { IUser } from "../models/User";
import Profile, { IProfile } from "../models/Profile";
import { UserInput } from "../validations/user.validation";
import bcrypt from "bcrypt";
import crypto from "crypto";

export const findUserById = async (userId: string): Promise<IUser | null> => {
    return await User.findById(userId);
};

export const deleteUserById = async (userId: string): Promise<IUser | null> => {
    return await User.findByIdAndDelete(userId);
};

export const populateUserWithProfile = async (userId: string) => {
    return await User.findById(userId).populate('additionalDetails').exec();
};

export const addCourseToStudent = async (userId: string, courseId: string): Promise<IUser | null> => {
    return await User.findByIdAndUpdate(
        userId,
        { $addToSet: { courses: courseId } },
        { new: true }
    );
};

export const findUserByEmail = async (email: string): Promise<IUser | null> => {
    return await User.findOne({ email });
};


export const createUserWithProfile = async (params: UserInput): Promise<IUser> => {
    const { firstName, lastName, email, phoneNumber, password, accountType } = params;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create minimal valid profile matching schema requirements
    const profilePayload: Partial<IProfile> = {
        userName: `${firstName} ${lastName}`.trim(),
        gender: "other",
        profession: undefined,
        dateOfBirth: undefined,
        about: undefined,
    } as unknown as IProfile; // cast only for creation payload shape

    const profileDoc = await Profile.create(profilePayload);

    const user = await User.create({
        firstName,
        lastName,
        email,
        phoneNumber,
        password: hashedPassword,
        confirmPassword: hashedPassword,
        accountType,
        additionalDetails: profileDoc._id,
        profileImage: `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(firstName)}%20${encodeURIComponent(lastName)}`,
    });

    return user;
};
// Update user's profile picture
export const updateUserProfilePic = async (
    userId: string,
    profileUrl: string
): Promise<IUser | null> => {
    return await User.findByIdAndUpdate(
        {_id: userId},
        {
            profileImage: profileUrl
        },
        {new: true}
    );
};

/**
 * Update user's password by email
 */
export const updateUserPasswordByEmail = async (
    email: string,
    hashedPassword: string
): Promise<IUser | null> => {
    return await User.findOneAndUpdate(
        { email },
        { 
            password: hashedPassword,
            token: undefined,
            resetPasswordExpires: undefined
        },
        { new: true }
    );
};

/**
 * Set password reset token for a user
 */
export const setPasswordResetToken = async (
    email: string,
    token: string,
    expiresAt: Date
): Promise<IUser | null> => {
    return await User.findOneAndUpdate(
        { email },
        { 
            token,
            resetPasswordExpires: expiresAt
        },
        { new: true }
    );
};

/**
 * Find user by reset token and check if it's valid
 */
export const findUserByResetToken = async (
    token: string
): Promise<IUser | null> => {
    return await User.findOne({
        token,
        resetPasswordExpires: { $gt: Date.now() }
    });
};

/**
 * Generate a random token for password reset
 */
export const generateResetToken = (): string => {
    return crypto.randomBytes(32).toString('hex');
};

/**
 * Hash a password
 */
export const hashPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, 12);
};
