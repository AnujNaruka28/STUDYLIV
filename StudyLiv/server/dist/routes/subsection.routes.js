"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_1 = require("../middlewares/validate");
const subsection_validation_1 = require("../validations/subsection.validation");
const SubSection_1 = require("../controllers/SubSection");
const params_validation_1 = require("../validations/params.validation");
const auth_1 = require("../middlewares/auth");
const subSectionRouter = (0, express_1.Router)();
subSectionRouter.post('/create-sub-section', auth_1.auth, auth_1.isInstructor, (0, validate_1.validate)({ body: subsection_validation_1.subSectionZodSchema }), SubSection_1.createsubSection);
subSectionRouter.put('/update-sub-section/:subSectionId', auth_1.auth, auth_1.isInstructor, (0, validate_1.validate)({ body: subsection_validation_1.subSectionZodSchema.partial(), params: params_validation_1.subsectionIdParamsSchema }), SubSection_1.updatesubSection);
subSectionRouter.delete('/delete-sub-section/:subSectionId', auth_1.auth, auth_1.isInstructor, (0, validate_1.validate)({ params: params_validation_1.subsectionIdParamsSchema }), SubSection_1.deleteSubSection);
// subSectionRouter.get('/subSections/:courseId',)
exports.default = subSectionRouter;
//# sourceMappingURL=subsection.routes.js.map