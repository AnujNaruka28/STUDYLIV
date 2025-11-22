"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Profile_1 = require("../controllers/Profile");
const auth_1 = require("../middlewares/auth");
const validate_1 = require("../middlewares/validate");
const profile_validation_1 = require("../validations/profile.validation");
const userRouter = (0, express_1.Router)();
userRouter.put('/edit-profile', auth_1.auth, (0, validate_1.validate)({ body: profile_validation_1.profileZodSchema.partial() }), Profile_1.updateProfile);
userRouter.delete('/delete-profile', auth_1.auth, Profile_1.deleteAccount);
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map