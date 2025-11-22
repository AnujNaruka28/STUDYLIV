import { Schema, Model, Document } from "mongoose";
export interface IRatingAndReview extends Document {
    user: Schema.Types.ObjectId;
    review: string;
    rating: number;
    course: Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
declare const RatingAndReview: Model<IRatingAndReview>;
export default RatingAndReview;
//# sourceMappingURL=RatingAndReview.d.ts.map