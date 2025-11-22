import { Router } from "express";
import { validate } from "../middlewares/validate";
import { categoryZodSchema } from "../validations/category.validation";
import { categoryIdParamsSchema } from "../validations/params.validation";
import {
    createCategoryController,
    getAllCategoriesController,
    getCategoryByIdController,
    updateCategoryController,
    deleteCategoryController,
    getCategoryDetails
} from "../controllers/Category";
import { auth, isAdmin } from "../middlewares/auth";

const categoryRouter = Router();
//verified --> only course pending to be updated here by admin
// Apply validation middleware to routes
categoryRouter.post('/create-category',auth,isAdmin, validate({ body: categoryZodSchema }), createCategoryController);
categoryRouter.get('/categories', getAllCategoriesController); //validate({ query: paginationQuerySchema })
categoryRouter.get('/:categoryId', validate({ params: categoryIdParamsSchema }), getCategoryByIdController);
//Other details
categoryRouter.get('/details/:categoryId', validate({ params: categoryIdParamsSchema }), getCategoryDetails);
categoryRouter.put('/update-category/:categoryId',auth,isAdmin, validate({ params: categoryIdParamsSchema, body: categoryZodSchema.partial() }), updateCategoryController);
categoryRouter.delete('/delete-category/:categoryId',auth,isAdmin, validate({ params: categoryIdParamsSchema }), deleteCategoryController);
export default categoryRouter;
