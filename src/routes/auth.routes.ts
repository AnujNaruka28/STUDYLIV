import { Router } from "express";
import { validate } from "../middlewares/validate";
import { userZodSchema, changePasswordZodSchema } from "../validations/user.validation";
import { changePassword, login, sendOtp, signUp } from "../controllers/Auth";
import { otpZodSchema } from "../validations/otp.validation";
import { auth } from "../middlewares/auth";
import { resetPassword, resetPasswordToken } from "../controllers/ResetPassword";
import { tokenParamsSchema } from "../validations/params.validation";

const authRouter = Router();
// verified
authRouter.post('/signup',validate({body: userZodSchema.partial()}),signUp);
authRouter.get('/send-otp',validate({body: otpZodSchema.partial()}),sendOtp);
authRouter.post('/login',validate({body: userZodSchema.partial()}),login);
authRouter.put('/change-password',auth,validate({body: changePasswordZodSchema}),changePassword);
authRouter.post('/forgot-password',auth,validate({body: userZodSchema.partial()}),resetPasswordToken);
authRouter.post('/reset-password/:token',auth,validate({body: userZodSchema.partial(),params: tokenParamsSchema}),resetPassword);

export default authRouter;
