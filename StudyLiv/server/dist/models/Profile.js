"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const profileSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        trim: true,
        required: true
    },
    profession: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true
    },
    about: {
        type: String,
        maxLength: 500
    }
}, {
    timestamps: true
});
const Profile = (0, mongoose_1.model)("Profile", profileSchema);
exports.default = Profile;
//# sourceMappingURL=Profile.js.map