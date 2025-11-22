"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratingAndReviewZodSchema = void 0;
const zod_1 = require("zod");
exports.ratingAndReviewZodSchema = zod_1.z.object({
    user: zod_1.z.string().min(1, "User is required"),
    review: zod_1.z.string().min(1, "Review is required"),
    rating: zod_1.z.number().min(1, "Rating must be at least 1").max(5, "Rating cannot be more than 5"),
    course: zod_1.z.string().min(1, "Course is required")
});
//# sourceMappingURL=rating.validation.js.map