"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSubSectionById = exports.deleteSubSectionById = exports.updateSubSection = exports.createSubSection = void 0;
const SubSection_1 = __importDefault(require("../models/SubSection"));
const createSubSection = async (data) => {
    const subsection = await SubSection_1.default.create(data);
    return subsection;
};
exports.createSubSection = createSubSection;
const updateSubSection = async (subsectionId, data) => {
    return await SubSection_1.default.findByIdAndUpdate(subsectionId, data, { new: true });
};
exports.updateSubSection = updateSubSection;
const deleteSubSectionById = async (subsectionId) => {
    return await SubSection_1.default.findByIdAndDelete(subsectionId);
};
exports.deleteSubSectionById = deleteSubSectionById;
const findSubSectionById = async (subsectionId) => {
    return await SubSection_1.default.findById(subsectionId);
};
exports.findSubSectionById = findSubSectionById;
//# sourceMappingURL=subsection.service.js.map