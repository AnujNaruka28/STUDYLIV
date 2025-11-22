"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactCreater = void 0;
const Contact_1 = __importDefault(require("../models/Contact"));
const contactCreater = async (contactInput) => {
    return await Contact_1.default.create(contactInput);
};
exports.contactCreater = contactCreater;
//# sourceMappingURL=contact.service.js.map