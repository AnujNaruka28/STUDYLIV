"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const courseSchema = new mongoose_1.Schema({
    courseName: { type: String, required: true },
    courseDescription: { type: String, default: "" },
    instructor: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    whatYouWillLearn: { type: String, default: "" },
    courseContent: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Section" }],
    ratingAndReviews: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "RatingAndReview" }],
    price: { type: Number, min: 0, default: 0 },
    thumbnail: { type: String, default: "" },
    tag: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Tag" }],
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: "Category", required: true },
    studentsEnrolled: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }]
}, { timestamps: true });
const Course = (0, mongoose_1.model)("Course", courseSchema);
exports.default = Course;
//# sourceMappingURL=Course.js.map