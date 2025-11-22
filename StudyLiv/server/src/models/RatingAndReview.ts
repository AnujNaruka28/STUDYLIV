import { Schema, Model, Document, model } from "mongoose";

export interface IRatingAndReview extends Document {
    user: Schema.Types.ObjectId;
    review: string;
    rating: number;
    course: Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const ratingAndReviewSchema: Schema<IRatingAndReview> = new Schema(
    {
        user:{ 
            type:Schema.Types.ObjectId, 
            required:true, 
            ref:"User" 
        },
        review:{ 
            type:String, 
            required:true 
        },
        rating:{ 
            type:Number,
            required:true 
        },
        course:{
            type: Schema.Types.ObjectId,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const RatingAndReview: Model<IRatingAndReview> = model("RatingAndReview", ratingAndReviewSchema);
export default RatingAndReview;



