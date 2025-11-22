"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactZodSchema = void 0;
const zod_1 = require("zod");
const base_validation_1 = require("./base.validation");
exports.contactZodSchema = base_validation_1.baseUserZodSchema.extend({
    message: zod_1.z.string().min(1, "Message is required"),
});
//# sourceMappingURL=contact.validation.js.map