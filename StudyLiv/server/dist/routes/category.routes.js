"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_1 = require("../middlewares/validate");
const category_validation_1 = require("../validations/category.validation");
const params_validation_1 = require("../validations/params.validation");
const Category_1 = require("../controllers/Category");
const auth_1 = require("../middlewares/auth");
const categoryRouter = (0, express_1.Router)();
// Apply validation middleware to routes
categoryRouter.post('/create-category', auth_1.auth, auth_1.isInstructor, (0, validate_1.validate)({ body: category_validation_1.categoryZodSchema }), Category_1.createCategoryController);
categoryRouter.get('/categories', (0, validate_1.validate)({ query: params_validation_1.paginationQuerySchema }), Category_1.getAllCategoriesController);
categoryRouter.get('/:categoryId', (0, validate_1.validate)({ params: params_validation_1.categoryIdParamsSchema }), Category_1.getCategoryByIdController);
//Other details
categoryRouter.get('/details/:categoryId', (0, validate_1.validate)({ params: params_validation_1.categoryIdParamsSchema }), Category_1.getCategoryDetails);
categoryRouter.put('/:categoryId', auth_1.auth, auth_1.isInstructor, (0, validate_1.validate)({ params: params_validation_1.categoryIdParamsSchema, body: category_validation_1.categoryZodSchema.partial() }), Category_1.updateCategoryController);
categoryRouter.delete('/:categoryId', (0, validate_1.validate)({ params: params_validation_1.categoryIdParamsSchema }), Category_1.deleteCategoryController);
exports.default = categoryRouter;
//# sourceMappingURL=category.routes.js.map