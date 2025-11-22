"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTags = exports.createTag = exports.getSingleTag = void 0;
const Tag_1 = __importDefault(require("../models/Tag"));
const getSingleTag = async (name) => {
    return await Tag_1.default.findOne({ name });
};
exports.getSingleTag = getSingleTag;
const createTag = async (data) => {
    return await Tag_1.default.create(data);
};
exports.createTag = createTag;
const fetchTags = async () => {
    return await Tag_1.default.find({}, { name: true, description: true });
};
exports.fetchTags = fetchTags;
//# sourceMappingURL=tag.service.js.map