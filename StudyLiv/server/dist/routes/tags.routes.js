"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Tags_1 = require("../controllers/Tags");
const validate_1 = require("../middlewares/validate");
const tag_validation_1 = require("../validations/tag.validation");
const auth_1 = require("../middlewares/auth");
const tagRouter = (0, express_1.Router)();
tagRouter.post('/create-tag', auth_1.auth, auth_1.isInstructor, (0, validate_1.validate)({ body: tag_validation_1.tagZodSchema }), Tags_1.createTagHandler);
tagRouter.get('/tags', Tags_1.getAllTagsHandler);
exports.default = tagRouter;
//# sourceMappingURL=tags.routes.js.map