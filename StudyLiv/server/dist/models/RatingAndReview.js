"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ratingAndReviewSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    review: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    course: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    }
}, {
    timestamps: true
});
const RatingAndReview = (0, mongoose_1.model)("RatingAndReview", ratingAndReviewSchema);
exports.default = RatingAndReview;
//# sourceMappingURL=RatingAndReview.js.map