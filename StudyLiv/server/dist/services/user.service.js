"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = exports.generateResetToken = exports.findUserByResetToken = exports.setPasswordResetToken = exports.updateUserPasswordByEmail = exports.createUserWithProfile = exports.findUserByEmail = exports.addCourseToStudent = exports.populateUserWithProfile = exports.deleteUserById = exports.findUserById = void 0;
const User_1 = __importDefault(require("../models/User"));
const Profile_1 = __importDefault(require("../models/Profile"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const crypto_1 = __importDefault(require("crypto"));
const findUserById = async (userId) => {
    return await User_1.default.findById(userId);
};
exports.findUserById = findUserById;
const deleteUserById = async (userId) => {
    return await User_1.default.findByIdAndDelete(userId);
};
exports.deleteUserById = deleteUserById;
const populateUserWithProfile = async (userId) => {
    return await User_1.default.findById(userId).populate('additionalDetails').exec();
};
exports.populateUserWithProfile = populateUserWithProfile;
const addCourseToStudent = async (userId, courseId) => {
    return await User_1.default.findByIdAndUpdate(userId, { $addToSet: { courses: courseId } }, { new: true });
};
exports.addCourseToStudent = addCourseToStudent;
const findUserByEmail = async (email) => {
    return await User_1.default.findOne({ email });
};
exports.findUserByEmail = findUserByEmail;
const createUserWithProfile = async (params) => {
    const { firstName, lastName, email, phoneNumber, password, accountType } = params;
    // Hash password
    const hashedPassword = await bcrypt_1.default.hash(password, 12);
    // Create minimal valid profile matching schema requirements
    const profilePayload = {
        userName: `${firstName} ${lastName}`.trim(),
        gender: "other",
        profession: undefined,
        dateOfBirth: undefined,
        about: undefined,
    }; // cast only for creation payload shape
    const profileDoc = await Profile_1.default.create(profilePayload);
    const user = await User_1.default.create({
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
exports.createUserWithProfile = createUserWithProfile;
/**
 * Update user's password by email
 */
const updateUserPasswordByEmail = async (email, hashedPassword) => {
    return await User_1.default.findOneAndUpdate({ email }, {
        password: hashedPassword,
        token: undefined,
        resetPasswordExpires: undefined
    }, { new: true });
};
exports.updateUserPasswordByEmail = updateUserPasswordByEmail;
/**
 * Set password reset token for a user
 */
const setPasswordResetToken = async (email, token, expiresAt) => {
    return await User_1.default.findOneAndUpdate({ email }, {
        token,
        resetPasswordExpires: expiresAt
    }, { new: true });
};
exports.setPasswordResetToken = setPasswordResetToken;
/**
 * Find user by reset token and check if it's valid
 */
const findUserByResetToken = async (token) => {
    return await User_1.default.findOne({
        token,
        resetPasswordExpires: { $gt: Date.now() }
    });
};
exports.findUserByResetToken = findUserByResetToken;
/**
 * Generate a random token for password reset
 */
const generateResetToken = () => {
    return crypto_1.default.randomBytes(32).toString('hex');
};
exports.generateResetToken = generateResetToken;
/**
 * Hash a password
 */
const hashPassword = async (password) => {
    return await bcrypt_1.default.hash(password, 12);
};
exports.hashPassword = hashPassword;
//# sourceMappingURL=user.service.js.map