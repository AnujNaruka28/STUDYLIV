"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_1 = require("../middlewares/validate");
const params_validation_1 = require("../validations/params.validation");
const Payments_1 = require("../controllers/Payments");
const auth_1 = require("../middlewares/auth");
const paymentRouter = (0, express_1.Router)();
paymentRouter.get('/buy-course/:courseId', auth_1.auth, auth_1.isStudent, (0, validate_1.validate)({ params: params_validation_1.courseIdParamsSchema }), Payments_1.capturePayment);
paymentRouter.get('/verify-signature', auth_1.auth, auth_1.isStudent, Payments_1.verifySignature);
exports.default = paymentRouter;
//# sourceMappingURL=payment.routes.js.map