"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.resetPasswordToken = void 0;
const response_1 = require("../utils/response");
const user_service_1 = require("../services/user.service");
const mailSender_1 = require("../utils/mailSender");
const env_validation_1 = require("../validations/env.validation");
/**
 * @description Generate and send reset password token
 * @route POST /auth/forgot-password
 * @access Public
 */
const resetPasswordToken = async (req, res) => {
    try {
        const { email } = req.body;
        // Validate email
        if (!email) {
            return (0, response_1.validationError)(res, ['Email is required']);
        }
        // Check if user exists
        const user = await (0, user_service_1.findUserByEmail)(email);
        if (!user) {
            // For security, don't reveal if email exists or not
            return (0, response_1.success)(res, null, 'If an account exists with this email, a reset link has been sent');
        }
        // Generate token and set expiration (10 minutes)
        const token = (0, user_service_1.generateResetToken)();
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now
        // Save token to user
        await (0, user_service_1.setPasswordResetToken)(email, token, expiresAt);
        // Send reset email
        const resetUrl = `${env_validation_1.ENV.FRONTEND_URL || 'http://localhost:3000'}/reset-password/${token}`;
        await (0, mailSender_1.mailSender)(email, 'Password Reset Request', `You requested a password reset. Please click the link below to set a new password.\n\n${resetUrl}\n\nThis link will expire in 10 minutes.`);
        return (0, response_1.success)(res, null, 'If an account exists with this email, a reset link has been sent');
    }
    catch (err) {
        console.error('Error in resetPasswordToken:', err);
        return (0, response_1.error)(res, 'Failed to process password reset request', 500, err);
    }
};
exports.resetPasswordToken = resetPasswordToken;
/**
 * @description Reset user password using token
 * @route POST /auth/reset-password/:token
 * @access Public
 */
const resetPassword = async (req, res) => {
    try {
        const { token } = req.params;
        const { password, confirmPassword } = req.body;
        // Validate input
        if (!password || !confirmPassword) {
            return (0, response_1.validationError)(res, ['Password and confirm password are required']);
        }
        if (password !== confirmPassword) {
            return (0, response_1.validationError)(res, ['Passwords do not match']);
        }
        // Find user by token and check if it's valid
        const user = await (0, user_service_1.findUserByResetToken)(token);
        if (!user) {
            return (0, response_1.notFound)(res, 'Invalid or expired reset token');
        }
        // Update password
        const hashedPassword = await (0, user_service_1.hashPassword)(password);
        await (0, user_service_1.updateUserPasswordByEmail)(user.email, hashedPassword);
        return (0, response_1.success)(res, null, 'Password has been reset successfully. You can now log in with your new password.');
    }
    catch (err) {
        console.error('Error in resetPassword:', err);
        return (0, response_1.error)(res, 'Failed to reset password', 500, err);
    }
};
exports.resetPassword = resetPassword;
exports.default = {
    resetPasswordToken: exports.resetPasswordToken,
    resetPassword: exports.resetPassword
};
//# sourceMappingURL=ResetPassword.js.map