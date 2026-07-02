import { Router } from "express";
import { courseZodSchema } from "../validations/course.validation";
import { createCourse, deleteCourse, getCourseDetails, showAllCourses, updateCourse } from "../controllers/Course";
import { validate } from "../middlewares/validate";
import { courseIdParamsSchema } from "../validations/params.validation";
import { auth, isInstructor } from "../middlewares/auth";

const courseRouter = Router();
//verified
courseRouter.post('/create-course',auth,isInstructor,validate({body: courseZodSchema}),createCourse);
courseRouter.get('/courses',showAllCourses);
courseRouter.get('/:courseId',validate({params: courseIdParamsSchema}),getCourseDetails);
courseRouter.put('/update-course/:courseId',auth,isInstructor,
    validate({body: courseZodSchema.partial(),params: courseIdParamsSchema}),
    updateCourse
);
courseRouter.delete('/delete-course/:courseId',auth,isInstructor,
    validate({params: courseIdParamsSchema}),
    deleteCourse
);

export default courseRouter;