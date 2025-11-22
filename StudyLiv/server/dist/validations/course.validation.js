"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseZodSchema = void 0;
const zod_1 = require("zod");
exports.courseZodSchema = zod_1.z.object({
    courseName: zod_1.z.string().min(1, "Course name is required"),
    courseDescription: zod_1.z.string().optional(),
    instructor: zod_1.z.string().min(1, "Instructor is required"),
    whatYouWillLearn: zod_1.z.string().optional(),
    courseContent: zod_1.z.array(zod_1.z.string()).optional(),
    ratingAndReviews: zod_1.z.array(zod_1.z.string()).optional(),
    price: zod_1.z.number().min(0, "Price must be greater than 0"),
    thumbnail: zod_1.z.string().optional(),
    tag: zod_1.z.array(zod_1.z.string()).optional(),
    category: zod_1.z.string().min(1, "Category is required"),
    studentsEnrolled: zod_1.z.array(zod_1.z.string()).optional(),
});
//# sourceMappingURL=course.validation.js.map