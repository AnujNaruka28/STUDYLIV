"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContact = void 0;
const response_1 = require("../utils/response");
const contact_service_1 = require("../services/contact.service");
const mailSender_1 = require("../utils/mailSender");
const createContact = async (req, res) => {
    try {
        const contactData = req.body;
        const newContact = await (0, contact_service_1.contactCreater)(contactData);
        if (!newContact) {
            return (0, response_1.error)(res, 'Failed to create contact');
        }
        try {
            const mailResponse = await (0, mailSender_1.mailSender)(newContact.email, `Contact Form Submission from ${newContact.firstName} ${newContact.lastName}`, newContact.message);
            console.log("Mail send successfully", mailResponse);
        }
        catch (err) {
            console.log("Error while sending contact mail", err.message);
            throw err;
        }
        return (0, response_1.success)(res, newContact, 'Contact created successfully', 201);
    }
    catch (err) {
        return (0, response_1.error)(res, err.message || 'Failed to create contact');
    }
};
exports.createContact = createContact;
//# sourceMappingURL=Contact.js.map