import bcrypt from 'bcrypt';
import { updateUserPasswordByEmail } from '../services/user.service';

/**
 * Utility function to reset a user's password with a new hash
 * This is useful when the stored hash is corrupted or doesn't match
 */
export const resetUserPassword = async (email: string, newPassword: string): Promise<boolean> => {
    try {
        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 12);
        
        // Update the user's password in the database
        const updatedUser = await updateUserPasswordByEmail(email, hashedPassword);
        
        if (updatedUser) {
            console.log(`Password successfully reset for user: ${email}`);
            return true;
        } else {
            console.log(`User not found: ${email}`);
            return false;
        }
    } catch (error) {
        console.error('Error resetting password:', error);
        return false;
    }
};

/**
 * Test function to verify a password against a hash
 */
export const testPasswordHash = async (password: string, hash: string): Promise<boolean> => {
    try {
        return await bcrypt.compare(password, hash);
    } catch (error) {
        console.error('Error testing password hash:', error);
        return false;
    }
};