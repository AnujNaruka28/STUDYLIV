import { Request,Response } from "express";
import { success,error } from "../utils/response";
import { contactCreater } from "../services/contact.service";
// import { mailSender } from "../utils/mailSender";

export const createContact = async (req: Request, res: Response) => {
    try {
        const contactData = (req as any).body;
        const newContact = await contactCreater(contactData);
        if (!newContact) {
            return error(
                res,
                'Failed to create contact'
            );
        }
        try {
            // const mailResponse = await mailSender(
            //     newContact.email,
            //     `Contact Form Submission from ${newContact.firstName} ${newContact.lastName}`,
            //     newContact.message
            // );
            // console.log("Mail send successfully",mailResponse);
        } catch (err: any) {
            console.log("Error while sending contact mail",err.message);
            throw err;
        }
        return success(
            res,
            newContact,
            'Contact created successfully',
            201
        );
    } catch (err: any) {
        return error(
            res,
            err.message || 'Failed to create contact'
        );
    }
};