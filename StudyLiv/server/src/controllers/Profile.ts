import { Request, Response } from 'express';
import {
  detachInstructorFromCourses,
  removeStudentFromAllCourses,
} from '../services/course.service';
import {
  findUserById,
  deleteUserById,
  populateUserWithProfile,
  updateUserProfilePic,
} from '../services/user.service';
import {
  deleteProfileById,
  findProfileById,
  updateProfileById,
} from '../services/profile.service';
import { Gender } from '../models/Profile';
import {
  success,
  error,
  notFound,
  validationError,
  unauthorized,
} from '../utils/response';
import { CustomRequest } from '../types/CustomRequest';
import { uploadToCloudinary } from '../utils/mediaUploader';
import { folderName } from './SubSection';
import { UploadedFile } from 'express-fileupload';

// Custom request type for authenticated routes
// interface AuthenticatedRequest extends Request {
//   user?: { id: string };
// }

// Update Profile
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const {
      userName: displayName = '',
      profession = '',
      dateOfBirth,
      gender,
      about = '',
    } = req.body;

    const userId = (req as any).user?.id;

    // Input validation
    const errors = [];
    if (!userId) errors.push({ field: 'userId', message: 'User ID is required' });
    if (!gender) errors.push({ field: 'gender', message: 'Gender is required' });
    
    if (dateOfBirth && isNaN(new Date(dateOfBirth).getTime())) {
      errors.push({ field: 'dateOfBirth', message: 'Invalid date format' });
    }

    if (errors.length > 0) {
      return validationError(res, errors);
    }

    // Find and validate user
    const userDetails = await findUserById(userId);
    if (!userDetails) {
      return notFound(res, 'User not found');
    }

    // Find and validate profile
    const profileId = userDetails.additionalDetails as any;
    const profileDetails = await findProfileById(profileId);
    if (!profileDetails) {
      return notFound(res, 'Profile not found');
    }

    // Update profile
    await updateProfileById(profileId, {
      userName: String(displayName).trim(),
      profession: String(profession).trim(),
      dateOfBirth: dateOfBirth 
        ? (new Date(dateOfBirth) as any) 
        : (profileDetails.dateOfBirth as any),
      gender: String(gender) as Gender,
      about: String(about).trim()
    });

    return success(res, null, 'Profile updated successfully');
  } catch (err: any) {
    return error(
      res, 
      `Failed to update profile: ${err.message}`,
      500
    );
  }
};
export const updateUserProfile = async (req: Request,res: Response) => {
  try {
    const userId = (req as CustomRequest).user?.id;
    if (!userId) {
      return unauthorized(res, 'Authentication required');
    }

    const profilePic: UploadedFile = req.files?.profile as UploadedFile;

    if(!profilePic) {
      return validationError(res, [{
                field: 'profilePic',
                message: 'ProfilePic is required'
      }]);
    }
    
    console.log('Profile pic details:', {
      name: profilePic.name,
      size: profilePic.size,
      mimetype: profilePic.mimetype,
      tempFilePath: profilePic.tempFilePath
    });

    if(!["image/jpeg", "image/png"].includes(profilePic.mimetype)) {
      return validationError(res, [{
                field: 'profile-picture',
                message: 'Invalid file type. Only JPEG and PNG allowed.'
      }]);
    }

    // Check if tempFilePath exists
    if (!profilePic.tempFilePath) {
      return error(res, 'Temporary file path not found. Make sure useTempFiles is enabled.');
    }

    console.log('Attempting to upload to Cloudinary...');
    const { secure_url } = await uploadToCloudinary(profilePic.tempFilePath, folderName);
    console.log('Upload successful, updating user profile...');
    
    const updatedUser = await updateUserProfilePic(userId,secure_url);
    return success(res,updatedUser,'Updated The Profile Picture');
  } catch (err: any) {
      console.error('Profile update error:', err);
      return error(
        res,
        `Failed to update profile picture: ${err.message}`
      )
  }
}
// Get user details with populated profile
export const getUserDetails = async (req: Request, res: Response) => {
  try {
    const userId = (req as CustomRequest).user?.id;
    if (!userId) {
      return unauthorized(res, 'Authentication required');
    }

    const user = await populateUserWithProfile(userId);
    if (!user) {
      return notFound(res, 'User not found');
    }

    return success(res, user, 'User details fetched successfully');
  } catch (err: any) {
    return error(
      res,
      `Failed to fetch user details: ${err.message}`
    );
  }
};

// Delete user account
export const deleteAccount = async (req: Request, res: Response) => {
  try {
    const userId = (req as CustomRequest).user?.id;

    if (!userId) {
      return validationError(res, [{
        field: 'userId',
        message: 'User ID is required'
      }]);
    }

    const user = await findUserById(userId);
    if (!user) {
      return notFound(res, 'User not found');
    }

    try {
      const accountType = user.accountType;

      // First detach user from courses
      if (accountType === 'Instructor') {
        await detachInstructorFromCourses(userId);
      } else if (accountType === 'Student') {
        await removeStudentFromAllCourses(userId);
      }

      // Then delete profile and user
      await Promise.all([
        deleteProfileById(user.additionalDetails as any),
        deleteUserById(userId)
      ]);

      return success(res, null, 'Account deleted successfully');
    } catch (deleteError: any) {
      return error(
        res,
        `Failed to delete account: ${deleteError.message}`,
        500
      );
    }
  } catch (err: any) {
    return error(
      res,
      `Internal server error: ${err.message}`
    );
  }
};
