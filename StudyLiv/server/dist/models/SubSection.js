"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const subSectionSchema = new mongoose_1.Schema({
    title: { type: String, maxLength: 500, required: true },
    description: { type: String, maxLength: 500, required: true },
    duration: { type: String, required: true },
    videoUrl: { type: String, required: true },
    contentType: { type: String, enum: ['live', 'video', 'instructor_questions'] },
    practicetitle: { type: String },
    questions: [{ type: String }]
}, {
    timestamps: true
});
const SubSection = (0, mongoose_1.model)("SubSection", subSectionSchema);
exports.default = SubSection;
//# sourceMappingURL=SubSection.js.map