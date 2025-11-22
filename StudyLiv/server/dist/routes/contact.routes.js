"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Contact_1 = require("../controllers/Contact");
const validate_1 = require("../middlewares/validate");
const contact_validation_1 = require("../validations/contact.validation");
const contactRouter = (0, express_1.Router)();
contactRouter.post('/create', (0, validate_1.validate)({ body: contact_validation_1.contactZodSchema }), Contact_1.createContact);
exports.default = contactRouter;
//# sourceMappingURL=contact.routes.js.map