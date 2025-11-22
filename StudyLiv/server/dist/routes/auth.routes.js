"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_1 = require("../middlewares/validate");
const user_validation_1 = require("../validations/user.validation");
const Auth_1 = require("../controllers/Auth");
const otp_validation_1 = require("../validations/otp.validation");
const auth_1 = require("../middlewares/auth");
const ResetPassword_1 = require("../controllers/ResetPassword");
const params_validation_1 = require("../validations/params.validation");
const authRouter = (0, express_1.Router)();
authRouter.post('/signup', (0, validate_1.validate)({ body: user_validation_1.userZodSchema.partial() }), Auth_1.signUp);
authRouter.post('/send-otp', (0, validate_1.validate)({ body: otp_validation_1.otpZodSchema }), Auth_1.sendOtp);
authRouter.post('/login', (0, validate_1.validate)({ body: user_validation_1.userZodSchema.partial() }), Auth_1.login);
authRouter.put('/change-password', auth_1.auth, (0, validate_1.validate)({ body: user_validation_1.userZodSchema.partial() }), Auth_1.changePassword);
authRouter.post('/reset-password', auth_1.auth, (0, validate_1.validate)({ body: user_validation_1.userZodSchema.partial() }), ResetPassword_1.resetPassword);
authRouter.post('/reset-password/:token', auth_1.auth, (0, validate_1.validate)({ body: user_validation_1.userZodSchema.partial(), params: params_validation_1.tokenParamsSchema }), ResetPassword_1.resetPasswordToken);
exports.default = authRouter;
//# sourceMappingURL=auth.routes.js.map