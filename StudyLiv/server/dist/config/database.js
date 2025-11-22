"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const env_validation_1 = require("../validations/env.validation");
const dbConnect = async () => {
    await mongoose_1.default.connect(env_validation_1.ENV.DATABASE_URL)
        .then(() => console.log('Database connection successful...'))
        .catch((err) => {
        console.log('Database connection failed...');
        console.error(err.message);
        process.exit(1);
    });
};
exports.default = dbConnect;
//# sourceMappingURL=database.js.map