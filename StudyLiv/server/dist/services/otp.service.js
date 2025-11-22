"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyLatestOtp = exports.findLatestOtpByEmail = exports.createOtp = void 0;
const Otp_1 = __importDefault(require("../models/Otp"));
const createOtp = async (otpInput) => {
    return await Otp_1.default.create({ otpInput });
};
exports.createOtp = createOtp;
const findLatestOtpByEmail = async (email) => {
    const recent = await Otp_1.default.find({ otpInput: { email } }).sort({ createdAt: -1 }).limit(1);
    return recent[0] ?? null;
};
exports.findLatestOtpByEmail = findLatestOtpByEmail;
const verifyLatestOtp = async (otpInput, providedOtp) => {
    const latest = await (0, exports.findLatestOtpByEmail)(otpInput.email);
    if (!latest)
        return { ok: false, reason: "Otp not found", otpDoc: null };
    if (latest.otp !== providedOtp)
        return { ok: false, reason: "Otp doesnot match", otpDoc: latest };
    return { ok: true, otpDoc: latest };
};
exports.verifyLatestOtp = verifyLatestOtp;
//# sourceMappingURL=otp.service.js.map