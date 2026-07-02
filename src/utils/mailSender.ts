import nodemailer, { Transporter, SentMessageInfo } from "nodemailer";
import { ENV as env } from '../validations/env.validation';

export const mailSender = async (email: string, title: string, body: string) => {
    try {
        
        const transporter: Transporter = nodemailer.createTransport({
            host: env.MAIL_HOST,
            auth: {
                user: env.MAIL_USER,
                pass: env.MAIL_PASS
            }
        });

        const info: SentMessageInfo = await transporter.sendMail({
            from: `StudyLiv <${env.MAIL_USER}>`,
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`
        });

        console.log(info);
        return info;

    } catch (err: any) {
        console.error("Error while sending mail...", err?.message || err);
        throw err;
    }
};