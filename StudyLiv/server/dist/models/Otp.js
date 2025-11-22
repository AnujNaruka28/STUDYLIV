"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mailSender_1 = require("../utils/mailSender");
const otpSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now(), expires: 5 * 60 }
});
async function sendverificationEmail(email, otp) {
    try {
        const mailResponse = await (0, mailSender_1.mailSender)(email, "Verify the email with this otp: ", otp);
        console.log("Mail send successfully", mailResponse);
    }
    catch (err) {
        console.log("Error while sending verification mail", err.message);
        throw err;
    }
}
otpSchema.pre("save", async function (next) {
    await sendverificationEmail(this.email, this.otp);
    next();
});
const Otp = (0, mongoose_1.model)("Otp", otpSchema);
exports.default = Otp;
//# sourceMappingURL=Otp.js.map