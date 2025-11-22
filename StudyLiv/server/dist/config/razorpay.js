"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const razorpay_1 = __importDefault(require("razorpay"));
const env_validation_1 = require("../validations/env.validation");
const razorpayInstance = new razorpay_1.default({
    key_id: env_validation_1.ENV.RAZORPAY_ID,
    key_secret: env_validation_1.ENV.RAZORPAY_SECRET,
    headers: { "X-Razorpay-Account": "acc_xyz" }
});
exports.default = razorpayInstance;
//# sourceMappingURL=razorpay.js.map