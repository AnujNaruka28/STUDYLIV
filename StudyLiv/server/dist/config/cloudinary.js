"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudinaryConnecter = void 0;
const cloudinary_1 = require("cloudinary");
const env_validation_1 = require("../validations/env.validation");
const cloudinaryConnecter = () => {
    try {
        cloudinary_1.v2.config({
            cloud_name: env_validation_1.ENV.CLOUDINARY_CLOUD_NAME,
            api_key: env_validation_1.ENV.CLOUDINARY_API_KEY,
            api_secret: env_validation_1.ENV.CLOUDINARY_API_SECRET,
        });
    }
    catch (err) {
        console.log('Failed to connect to cloudinary...');
        console.log('Error: ', err);
        process.exit(1);
    }
};
exports.cloudinaryConnecter = cloudinaryConnecter;
//# sourceMappingURL=cloudinary.js.map