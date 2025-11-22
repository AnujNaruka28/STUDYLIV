import { Router } from "express";
import { deleteAccount, updateProfile, updateUserProfile } from "../controllers/Profile";
import { auth } from "../middlewares/auth";
import { validate } from "../middlewares/validate";
import { profileZodSchema } from "../validations/profile.validation";

const userRouter = Router();
//verified
userRouter.put('/edit-profile',auth,validate({body: profileZodSchema.partial()}),updateProfile);
userRouter.put('/edit-profile-pic',auth,updateUserProfile);
userRouter.delete('/delete-profile',auth,deleteAccount);

export default userRouter;