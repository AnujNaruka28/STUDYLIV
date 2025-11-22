"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProfileById = exports.updateProfileById = exports.findProfileById = void 0;
const Profile_1 = __importDefault(require("../models/Profile"));
const findProfileById = async (profileId) => {
    return await Profile_1.default.findById(profileId);
};
exports.findProfileById = findProfileById;
const updateProfileById = async (profileId, updates) => {
    return await Profile_1.default.findByIdAndUpdate(profileId, updates, { new: true });
};
exports.updateProfileById = updateProfileById;
const deleteProfileById = async (profileId) => {
    return await Profile_1.default.findByIdAndDelete(profileId);
};
exports.deleteProfileById = deleteProfileById;
//# sourceMappingURL=profile.service.js.map