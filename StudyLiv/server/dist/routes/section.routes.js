"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_1 = require("../middlewares/validate");
const section_validation_1 = require("../validations/section.validation");
const params_validation_1 = require("../validations/params.validation");
const Section_1 = require("../controllers/Section");
const auth_1 = require("../middlewares/auth");
const sectionRouter = (0, express_1.Router)();
// Apply validation middleware to routes
sectionRouter.post('/create-section', auth_1.auth, auth_1.isInstructor, (0, validate_1.validate)({ body: section_validation_1.sectionZodSchema }), Section_1.createSectionController);
sectionRouter.get('/course/:courseId', (0, validate_1.validate)({ params: params_validation_1.courseIdParamsSchema, query: params_validation_1.paginationQuerySchema }), Section_1.getSectionsByCourseIdController);
sectionRouter.get('/:sectionId', (0, validate_1.validate)({ params: params_validation_1.sectionIdParamsSchema }), Section_1.getSectionByIdController);
sectionRouter.put('/:sectionId', auth_1.auth, auth_1.isInstructor, (0, validate_1.validate)({ params: params_validation_1.sectionIdParamsSchema, body: section_validation_1.sectionZodSchema.partial() }), Section_1.updateSectionController);
sectionRouter.delete('/:sectionId', auth_1.auth, auth_1.isInstructor, (0, validate_1.validate)({ params: params_validation_1.sectionIdParamsSchema }), Section_1.deleteSectionController);
exports.default = sectionRouter;
//# sourceMappingURL=section.routes.js.map