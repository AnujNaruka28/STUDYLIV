"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profileImage: { type: String, required: true },
    phoneNumber: { type: String, required: true, length: 10 },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    token: { type: String },
    resetPasswordExpires: { type: Date },
    additionalDetails: { type: mongoose_1.Schema.Types.ObjectId, ref: "Profile", required: true },
    accountType: { type: String, enum: ["Admin", "Student", "Instructor"], required: true },
    courses: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Course" }],
    courseProgress: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "CourseProgress" }],
    otp: { type: mongoose_1.Schema.Types.ObjectId, ref: "Otp" }
}, {
    timestamps: true
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
//# sourceMappingURL=User.js.map