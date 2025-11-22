"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const courseProgressSchema = new mongoose_1.Schema({
    courseId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Course" },
    progress: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "SubSection" }]
}, {
    timestamps: true
});
const CourseProgress = (0, mongoose_1.model)("CourseProgress", courseProgressSchema);
exports.default = CourseProgress;
//# sourceMappingURL=CourseProgress.js.map