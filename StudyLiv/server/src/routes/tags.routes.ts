import { Router } from "express";
import { createTagHandler, getAllTagsHandler } from "../controllers/Tags";
import { validate } from "../middlewares/validate";
import { tagZodSchema } from "../validations/tag.validation";
import { auth, isInstructor } from "../middlewares/auth";

const tagRouter = Router();
//verified
tagRouter.post('/create-tag',auth,isInstructor,validate({body: tagZodSchema}),createTagHandler);
tagRouter.get('/tags',getAllTagsHandler);

export default tagRouter;
