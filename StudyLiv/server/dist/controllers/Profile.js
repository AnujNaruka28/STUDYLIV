"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAccount = exports.getUserDetails = exports.updateProfile = void 0;
const course_service_1 = require("../services/course.service");
const user_service_1 = require("../services/user.service");
const profile_service_1 = require("../services/profile.service");
const response_1 = require("../utils/response");
// Custom request type for authenticated routes
// interface AuthenticatedRequest extends Request {
//   user?: { id: string };
// }
// Update Profile
const updateProfile = async (req, res) => {
    try {
        const { userName: displayName = '', profession = '', dateOfBirth, gender, about = '', } = req.body;
        const userId = req.user?.id;
        // Input validation
        const errors = [];
        if (!userId)
            errors.push({ field: 'userId', message: 'User ID is required' });
        if (!gender)
            errors.push({ field: 'gender', message: 'Gender is required' });
        if (dateOfBirth && isNaN(new Date(dateOfBirth).getTime())) {
            errors.push({ field: 'dateOfBirth', message: 'Invalid date format' });
        }
        if (errors.length > 0) {
            return (0, response_1.validationError)(res, errors);
        }
        // Find and validate user
        const userDetails = await (0, user_service_1.findUserById)(userId);
        if (!userDetails) {
            return (0, response_1.notFound)(res, 'User not found');
        }
        // Find and validate profile
        const profileId = userDetails.additionalDetails;
        const profileDetails = await (0, profile_service_1.findProfileById)(profileId);
        if (!profileDetails) {
            return (0, response_1.notFound)(res, 'Profile not found');
        }
        // Update profile
        await (0, profile_service_1.updateProfileById)(profileId, {
            userName: String(displayName).trim(),
            profession: String(profession).trim(),
            dateOfBirth: dateOfBirth
                ? new Date(dateOfBirth)
                : profileDetails.dateOfBirth,
            gender: String(gender),
            about: String(about).trim()
        });
        return (0, response_1.success)(res, null, 'Profile updated successfully');
    }
    catch (err) {
        return (0, response_1.error)(res, `Failed to update profile: ${err.message}`, 500);
    }
};
exports.updateProfile = updateProfile;
// Get user details with populated profile
const getUserDetails = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            return (0, response_1.unauthorized)(res, 'Authentication required');
        }
        const user = await (0, user_service_1.populateUserWithProfile)(userId);
        if (!user) {
            return (0, response_1.notFound)(res, 'User not found');
        }
        return (0, response_1.success)(res, user, 'User details fetched successfully');
    }
    catch (err) {
        return (0, response_1.error)(res, `Failed to fetch user details: ${err.message}`);
    }
};
exports.getUserDetails = getUserDetails;
// Delete user account
const deleteAccount = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            return (0, response_1.validationError)(res, [{
                    field: 'userId',
                    message: 'User ID is required'
                }]);
        }
        const user = await (0, user_service_1.findUserById)(userId);
        if (!user) {
            return (0, response_1.notFound)(res, 'User not found');
        }
        try {
            const accountType = user.accountType;
            // First detach user from courses
            if (accountType === 'Instructor') {
                await (0, course_service_1.detachInstructorFromCourses)(userId);
            }
            else if (accountType === 'Student') {
                await (0, course_service_1.removeStudentFromAllCourses)(userId);
            }
            // Then delete profile and user
            await Promise.all([
                (0, profile_service_1.deleteProfileById)(user.additionalDetails),
                (0, user_service_1.deleteUserById)(userId)
            ]);
            return (0, response_1.success)(res, null, 'Account deleted successfully');
        }
        catch (deleteError) {
            return (0, response_1.error)(res, `Failed to delete account: ${deleteError.message}`, 500);
        }
    }
    catch (err) {
        return (0, response_1.error)(res, `Internal server error: ${err.message}`);
    }
};
exports.deleteAccount = deleteAccount;
//# sourceMappingURL=Profile.js.map