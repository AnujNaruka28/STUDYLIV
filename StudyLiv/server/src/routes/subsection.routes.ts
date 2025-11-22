import { Router } from "express";
import { validate } from "../middlewares/validate";
import { subSectionZodSchema } from "../validations/subsection.validation";
import { createsubSection, deleteSubSection, updatesubSection } from "../controllers/SubSection";
import { subsectionIdParamsSchema } from "../validations/params.validation";
import { auth, isInstructor } from "../middlewares/auth";

const subSectionRouter = Router();
//verified
subSectionRouter.post('/create-sub-section',auth,isInstructor,
    validate({body: subSectionZodSchema}),
    createsubSection
);
subSectionRouter.put('/update-sub-section/:subsectionId',auth,isInstructor,
    validate({body: subSectionZodSchema.partial(),params: subsectionIdParamsSchema}),
    updatesubSection
);
subSectionRouter.delete('/delete-sub-section/:subsectionId',auth,isInstructor,
    validate({params: subsectionIdParamsSchema}),
    deleteSubSection
);
// subSectionRouter.get('/subSections/:courseId',)
export default subSectionRouter;
