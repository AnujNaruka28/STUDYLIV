import { v2 as cloudinary } from "cloudinary";
export const uploadToCloudinary = async (
    file: string,
    folderName: string,
    mediaQuality?: string,
    width?: number,
    height?: number
) => {
    try {
        console.log('Starting Cloudinary upload...');
        console.log('File path:', file);
        console.log('Folder name:', folderName);

        // Check if file path exists and is valid
        if (!file || typeof file !== 'string') {
            throw new Error('Invalid file path provided');
        }

        const options: any = {
            folder: folderName,
            resource_type: 'auto',
            quality: (mediaQuality || 'auto')
        };

        if(width && height) {
            options.width = width;
            options.height = height;
        }

        console.log('Upload options:', options);
        
        const result = await cloudinary.uploader.upload(file, options);
        console.log('Cloudinary upload successful:', result.secure_url);
        
        return result;
    } catch (error: any) {
        console.error('Cloudinary upload error:', error);
        console.error('Error details:', {
            message: error.message,
            stack: error.stack,
            file: file,
            folderName: folderName
        });
        throw new Error(`Cloudinary upload failed: ${error.message}`);
    }
};

// Attempt to derive public_id from a Cloudinary delivery URL
const extractPublicIdFromUrl = (url: string): string | null => {
    try {
      const uploadIdx = url.indexOf('/upload/');
      if (uploadIdx === -1) return null;
  
      // Extract the part after `/upload/`
      let path = url.substring(uploadIdx + '/upload/'.length);
  
      // Remove version prefix like "v1755017924/"
      path = path.replace(/^v\d+\//, '');
  
      // Remove query params if present (e.g., ?auto=format)
      const queryIndex = path.indexOf('?');
      if (queryIndex !== -1) {
        path = path.substring(0, queryIndex);
      }
  
      // Remove file extension (.mp4, .jpg, etc.)
      const lastDot = path.lastIndexOf('.');
      if (lastDot !== -1) {
        path = path.substring(0, lastDot);
      }
  
      return path || null;
    } catch (error) {
      console.error('Error extracting Cloudinary public ID:', error);
      return null;
    }
};

export const deleteFromCloudinary = async (
    url: string,
    resourceType: 'image' | 'video' | 'raw' | 'auto' = 'video'
) => {
    const publicId = extractPublicIdFromUrl(url);
    if (!publicId) {
        return { result: 'not_found' } as any;
    }
    return cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
};