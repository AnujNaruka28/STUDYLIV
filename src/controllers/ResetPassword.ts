import { Request, Response } from 'express';
import { 
  success, 
  error, 
  validationError, 
  notFound 
} from '../utils/response';
import { 
  findUserByEmail, 
  setPasswordResetToken, 
  findUserByResetToken, 
  hashPassword,
  updateUserPasswordByEmail,
  generateResetToken
} from '../services/user.service';
// import {mailSender} from '../utils/mailSender';
import {ENV as env} from '../validations/env.validation';
/**
 * @description Generate and send reset password token
 * @route POST /auth/forgot-password
 * @access Public
 */
export const resetPasswordToken = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    // Validate email
    if (!email) {
      return validationError(res, ['Email is required']);
    }

    // Check if user exists
    const user = await findUserByEmail(email);
    if (!user) {
      // For security, don't reveal if email exists or not
      return success(res, null, 'If an account exists with this email, a reset link has been sent');
    }

    // Generate token and set expiration (10 minutes)
    const token = generateResetToken();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now

    // Save token to user
    await setPasswordResetToken(email, token, expiresAt);

    // Send reset email
    const resetUrl = `${env.FRONTEND_URL || 'http://localhost:3000'}/reset-password/${token}`;
    
    // await mailSender(
    //   email,
    //   'Password Reset Request',
    //   `You requested a password reset. Please click the link below to set a new password.\n\n${resetUrl}\n\nThis link will expire in 10 minutes.`
    // );

    return success(
      res,
      resetUrl,
      'If an account exists with this email, a reset link has been sent'
    );
  } catch (err) {
    console.error('Error in resetPasswordToken:', err);
    return error(
      res,
      'Failed to process password reset request',
      500,
      err
    );
  }
};

/**
 * @description Reset user password using token
 * @route POST /auth/reset-password/:token
 * @access Public
 */
export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    const { password, confirmPassword } = req.body;

    // Validate input
    if (!password || !confirmPassword) {
      return validationError(res, ['Password and confirm password are required']);
    }

    if (password !== confirmPassword) {
      return validationError(res, ['Passwords do not match']);
    }

    // Find user by token and check if it's valid
    const user = await findUserByResetToken(token as string);
    if (!user) {
      return notFound(res, 'Invalid or expired reset token');
    }

    // Update password
    const hashedPassword = await hashPassword(password);
    await updateUserPasswordByEmail(user.email, hashedPassword);

    return success(
      res,
      null,
      'Password has been reset successfully. You can now log in with your new password.'
    );
  } catch (err) {
    console.error('Error in resetPassword:', err);
    return error(
      res,
      'Failed to reset password',
      500,
      err
    );
  }
};

export default {
  resetPasswordToken,
  resetPassword
};
