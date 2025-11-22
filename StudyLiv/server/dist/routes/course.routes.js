"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const course_validation_1 = require("../validations/course.validation");
const Course_1 = require("../controllers/Course");
const validate_1 = require("../middlewares/validate");
const params_validation_1 = require("../validations/params.validation");
const auth_1 = require("../middlewares/auth");
const courseRouter = (0, express_1.Router)();
courseRouter.post('/create-course', auth_1.auth, auth_1.isInstructor, (0, validate_1.validate)({ body: course_validation_1.courseZodSchema }), Course_1.createCourse);
courseRouter.get('/:courseId', (0, validate_1.validate)({ params: params_validation_1.courseIdParamsSchema }), Course_1.getCourseDetails);
courseRouter.get('/courses', Course_1.showAllCourses);
courseRouter.put('/update-course/:courseId', auth_1.auth, auth_1.isInstructor, (0, validate_1.validate)({ body: course_validation_1.courseZodSchema.partial(), params: params_validation_1.courseIdParamsSchema }), Course_1.updateCourse);
courseRouter.delete('/delete-course/:courseId', auth_1.auth, auth_1.isInstructor, (0, validate_1.validate)({ params: params_validation_1.courseIdParamsSchema }), Course_1.deleteCourse);
exports.default = courseRouter;
//# sourceMappingURL=course.routes.js.map