import { Router } from "express";
import { validate } from "../middlewares/validate";
import { sectionZodSchema } from "../validations/section.validation";
import { sectionIdParamsSchema, courseIdParamsSchema } from "../validations/params.validation";
import {
    createSectionController,
    updateSectionController,
    deleteSectionController,
    getSectionByIdController,
    getSectionsByCourseIdController
} from "../controllers/Section";
import { auth, isInstructor } from "../middlewares/auth";

const sectionRouter = Router();
//verified
// Apply validation middleware to routes
sectionRouter.post('/create-section/:courseId',auth,isInstructor, validate({ body: sectionZodSchema , params: courseIdParamsSchema}), createSectionController);
sectionRouter.get('/course/:courseId', validate({ params: courseIdParamsSchema}), getSectionsByCourseIdController);
sectionRouter.get('/:sectionId', validate({ params: sectionIdParamsSchema }), getSectionByIdController);
sectionRouter.put('/update-section/:sectionId',auth,isInstructor, validate({ params: sectionIdParamsSchema, body: sectionZodSchema.partial() }), updateSectionController);
sectionRouter.delete('/delete-section/:sectionId',auth,isInstructor, validate({ params: sectionIdParamsSchema }), deleteSectionController);

export default sectionRouter;
