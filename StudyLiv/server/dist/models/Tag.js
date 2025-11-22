"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const tagSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String },
    courses: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Course" }]
}, {
    timestamps: true
});
const Tag = (0, mongoose_1.model)("Tag", tagSchema);
exports.default = Tag;
//# sourceMappingURL=Tag.js.map