import { Router } from "express";
import { createContact } from "../controllers/Contact";
import { validate } from "../middlewares/validate";
import { contactZodSchema } from "../validations/contact.validation";

const contactRouter = Router();
//verified
contactRouter.post('/create',validate({body: contactZodSchema}),createContact);

export default contactRouter;
