import { Request, Response } from 'express';
import { 
    createTag, 
    fetchTags, 
    getSingleTag
} from '../services/tag.service';
import { TagInput } from '../validations/tag.validation';
import {
    success,
    error,
    validationError,
} from '../utils/response';

interface CreateTagRequest extends Request {
    body: {
        name: string;
        description?: string;
    }
}

export const createTagHandler = async (req: CreateTagRequest, res: Response): Promise<Response> => {
    try {
        const { name, description } = req.body;
        // Input validation
        if (!name || typeof name !== 'string') {
            return validationError(res, [{
                field: 'name',
                message: 'Tag name is required and must be a string'
            }]);
        }

        const trimmedName = name.trim();
        const trimmedDescription = description?.trim();

        // Check if tag already exists
        if (await getSingleTag(trimmedName)) {
            return error(res, 'Tag already exists',409);
        }

        // Create tag
        const tagInput: TagInput = { 
            name: trimmedName, 
            description: trimmedDescription 
        };

        const tagDetails = await createTag(tagInput);
        
        return success(
            res,
            tagDetails,
            'Tag created successfully',
            201
        );

    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        return error(
            res,
            `Failed to create tag: ${errorMessage}`
        );
    }
};

export const getAllTagsHandler = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const allTags = await fetchTags();
        return success(
            res,
            {
                count: allTags.length,
                tags: allTags
            },
            'Tags fetched successfully'
        );

    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch tags';
        return error(
            res,
            `Failed to fetch tags: ${errorMessage}`,
            undefined,
            process.env.NODE_ENV === 'development' ? (err as Error).stack : undefined
        );
    }
};
// Bash
// C++ , description - C++ is a statically typed, compiled programming language known for its efficiency and performance.
// C# , description - C# is a modern, object-oriented programming language developed by Microsoft.
// Go , description - Go is a statically typed, compiled programming language designed at Google.
// HTML & CSS , description - HTML & CSS are used for structuring and styling web pages.
// Java , description - Java is a widely-used, object-oriented programming language.
// JavaScript , description - JavaScript is a high-level, interpreted programming language commonly used for web development.
// Kotlin , description - Kotlin is a statically typed, JVM-based programming language developed by JetBrains.
// PHP , description - PHP is a server-side scripting language designed for web development.
// Python , description - Python is a high-level, interpreted programming language known for its readability and versatility.
// R , description - R is a statistical programming language used for data analysis and visualization.
// Ruby , description - Ruby is a dynamic, object-oriented programming language known for its simplicity and productivity.
// SQL , description - SQL is a standard language for managing relational databases.
// Swift , description - Swift is a modern, compiled programming language developed by Apple for iOS, macOS, watchOS, and tvOS development.
