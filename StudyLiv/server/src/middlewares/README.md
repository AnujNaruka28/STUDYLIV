# Validation Middleware Documentation

This middleware provides centralized Zod validation for your Express.js application, eliminating the need for repetitive `safeParse` logic in controllers.

## Features

- **Centralized Validation**: All Zod validation logic moved to middleware
- **Multiple Validation Types**: Body, params, query, and partial validation
- **Consistent Error Format**: Standardized error responses across the application
- **Type Safety**: Full TypeScript support
- **Flexible**: Works with any Zod schema

## Available Middleware Functions

### 1. `validate(schema)`
Validates request body against a Zod schema.

```typescript
import { validate } from '../middlewares/validate';
import { categoryZodSchema } from '../validations/category.validation';

// Apply to route
router.post('/', validate(categoryZodSchema), createCategoryController);
```

### 2. `validatePartial(schema)`
Validates request body for partial updates (PATCH requests).

```typescript
import { validatePartial } from '../middlewares/validate';

router.put('/:id', validatePartial(categoryZodSchema), updateCategoryController);
```

### 3. `validateParams(schema)`
Validates URL parameters.

```typescript
import { validateParams } from '../middlewares/validate';
import { categoryIdParamsSchema } from '../validations/params.validation';

router.get('/:categoryId', validateParams(categoryIdParamsSchema), getCategoryController);
```

### 4. `validateQuery(schema)`
Validates query parameters.

```typescript
import { validateQuery } from '../middlewares/validate';
import { paginationQuerySchema } from '../validations/params.validation';

router.get('/', validateQuery(paginationQuerySchema), getAllCategoriesController);
```

### 5. `validateBodyAndParams(bodySchema, paramsSchema?)`
Combines body and parameter validation.

```typescript
import { validateBodyAndParams } from '../middlewares/validate';

router.put('/:id', validateBodyAndParams(categoryZodSchema, categoryIdParamsSchema), updateCategoryController);
```

## Usage Examples

### Complete Route Setup

```typescript
import { Router } from "express";
import { validate, validatePartial, validateParams } from "../middlewares/validate";
import { categoryZodSchema } from "../validations/category.validation";
import { categoryIdParamsSchema } from "../validations/params.validation";
import {
    createCategoryController,
    getAllCategoriesController,
    getCategoryByIdController,
    updateCategoryController,
    deleteCategoryController
} from "../controllers/Category";

const router = Router();

// Apply validation middleware to routes
router.post('/', validate(categoryZodSchema), createCategoryController);
router.get('/', getAllCategoriesController);
router.get('/:categoryId', validateParams(categoryIdParamsSchema), getCategoryByIdController);
router.put('/:categoryId', validateParams(categoryIdParamsSchema), validatePartial(categoryZodSchema), updateCategoryController);
router.delete('/:categoryId', validateParams(categoryIdParamsSchema), deleteCategoryController);

export default router;
```

### Controller Changes

**Before (with safeParse):**
```typescript
export const createCategoryController = async (request: Request, response: Response) => {
    try {
        const parsed = categoryZodSchema.safeParse(request.body);
        if (!parsed.success) {
            return response.status(400).json({ 
                success: false, 
                message: parsed.error.message 
            });
        }

        const categoryDetails = await createCategory(parsed.data);
        return response.status(201).json({ 
            success: true, 
            message: 'Category created successfully', 
            data: categoryDetails 
        });
    } catch (err: any) {
        return response.status(500).json({ 
            success: false, 
            message: err.message 
        });
    }
};
```

**After (with middleware):**
```typescript
export const createCategoryController = async (request: Request, response: Response) => {
    try {
        // request.body is already validated and parsed by middleware
        const categoryDetails = await createCategory(request.body);
        return response.status(201).json({ 
            success: true, 
            message: 'Category created successfully', 
            data: categoryDetails 
        });
    } catch (err: any) {
        return response.status(500).json({ 
            success: false, 
            message: err.message 
        });
    }
};
```

## Error Response Format

When validation fails, the middleware returns a consistent error format:

```json
{
    "success": false,
    "message": "Validation failed",
    "errors": [
        {
            "field": "name",
            "message": "Name is required",
            "code": "invalid_type"
        },
        {
            "field": "price",
            "message": "Price must be greater than 0",
            "code": "too_small"
        }
    ]
}
```

## Parameter Validation Schemas

Create parameter validation schemas in `validations/params.validation.ts`:

```typescript
import { z } from "zod";

export const idParamsSchema = z.object({
    id: z.string().min(1, "ID is required")
});

export const categoryIdParamsSchema = z.object({
    categoryId: z.string().min(1, "Category ID is required")
});

export const courseIdParamsSchema = z.object({
    courseId: z.string().min(1, "Course ID is required")
});
```

## Benefits

1. **DRY Principle**: No more repeated validation logic
2. **Consistency**: All validation errors follow the same format
3. **Maintainability**: Changes to validation logic only need to be made in one place
4. **Type Safety**: Full TypeScript support with proper typing
5. **Performance**: Validation happens at the middleware level before reaching controllers
6. **Clean Controllers**: Controllers focus on business logic, not validation

## Migration Guide

1. Remove all `safeParse` logic from controllers
2. Remove validation error handling from controllers
3. Add appropriate middleware to routes
4. Ensure `request.body` is used directly in controllers (it's already validated)
5. Update parameter access to use `request.params` directly

This middleware system makes your codebase more maintainable, consistent, and follows best practices for Express.js applications.
