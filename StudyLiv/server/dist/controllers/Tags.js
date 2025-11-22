"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTagsHandler = exports.createTagHandler = void 0;
const tag_service_1 = require("../services/tag.service");
const response_1 = require("../utils/response");
const createTagHandler = async (req, res) => {
    try {
        const { name, description } = req.body;
        // Input validation
        if (!name || typeof name !== 'string') {
            return (0, response_1.validationError)(res, [{
                    field: 'name',
                    message: 'Tag name is required and must be a string'
                }]);
        }
        const trimmedName = name.trim();
        const trimmedDescription = description?.trim();
        // Check if tag already exists
        if (await (0, tag_service_1.getSingleTag)(trimmedName)) {
            return (0, response_1.error)(res, 'Tag already exists', 409);
        }
        // Create tag
        const tagInput = {
            name: trimmedName,
            description: trimmedDescription
        };
        const tagDetails = await (0, tag_service_1.createTag)(tagInput);
        return (0, response_1.success)(res, tagDetails, 'Tag created successfully', 201);
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        return (0, response_1.error)(res, `Failed to create tag: ${errorMessage}`);
    }
};
exports.createTagHandler = createTagHandler;
const getAllTagsHandler = async (_req, res) => {
    try {
        const allTags = await (0, tag_service_1.fetchTags)();
        return (0, response_1.success)(res, {
            count: allTags.length,
            tags: allTags
        }, 'Tags fetched successfully');
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch tags';
        return (0, response_1.error)(res, `Failed to fetch tags: ${errorMessage}`, undefined, process.env.NODE_ENV === 'development' ? err.stack : undefined);
    }
};
exports.getAllTagsHandler = getAllTagsHandler;
//# sourceMappingURL=Tags.js.map