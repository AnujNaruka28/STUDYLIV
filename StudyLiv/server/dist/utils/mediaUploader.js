"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFromCloudinary = exports.uploadToCloudinary = void 0;
const cloudinary_1 = require("cloudinary");
const uploadToCloudinary = (file, folderName, mediaQuality, width, height) => {
    const options = {
        folder: folderName,
        resource_type: 'auto',
        quality: (mediaQuality || 'auto')
    };
    if (width && height) {
        options.width = width;
        options.height = height;
    }
    return cloudinary_1.v2.uploader.upload(file, options);
};
exports.uploadToCloudinary = uploadToCloudinary;
// Attempt to derive public_id from a Cloudinary delivery URL
const extractPublicIdFromUrl = (url) => {
    try {
        const uploadIdx = url.indexOf('/upload/');
        if (uploadIdx === -1)
            return null;
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
    }
    catch (error) {
        console.error('Error extracting Cloudinary public ID:', error);
        return null;
    }
};
const deleteFromCloudinary = async (url, resourceType = 'video') => {
    const publicId = extractPublicIdFromUrl(url);
    if (!publicId) {
        return { result: 'not_found' };
    }
    return cloudinary_1.v2.uploader.destroy(publicId, { resource_type: resourceType });
};
exports.deleteFromCloudinary = deleteFromCloudinary;
//# sourceMappingURL=mediaUploader.js.map