"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailSender = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const env_validation_1 = require("../validations/env.validation");
const mailSender = async (email, title, body) => {
    try {
        const transporter = nodemailer_1.default.createTransport({
            host: env_validation_1.ENV.MAIL_HOST,
            auth: {
                user: env_validation_1.ENV.MAIL_USER,
                pass: env_validation_1.ENV.MAIL_PASS
            }
        });
        const info = await transporter.sendMail({
            from: `StudyLiv <${env_validation_1.ENV.MAIL_USER}>`,
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`
        });
        console.log(info);
        return info;
    }
    catch (err) {
        console.error("Error while sending mail...", err?.message || err);
        throw err;
    }
};
exports.mailSender = mailSender;
//# sourceMappingURL=mailSender.js.map