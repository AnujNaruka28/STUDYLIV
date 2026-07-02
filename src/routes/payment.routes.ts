import { Router } from "express";
import { validate } from "../middlewares/validate";
import { courseIdParamsSchema } from "../validations/params.validation";
import { capturePayment, verifySignature } from "../controllers/Payments";
import { auth, isStudent } from "../middlewares/auth";

const paymentRouter = Router();

paymentRouter.get('/buy-course/:courseId',auth,isStudent,validate({params: courseIdParamsSchema}),capturePayment);
paymentRouter.get('/verify-signature',auth,isStudent,verifySignature);

export default paymentRouter;