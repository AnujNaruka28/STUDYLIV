import { Schema, Model, Document, model } from "mongoose";

export interface ICourse extends Document {
    courseName: string;
    courseDescription?: string;
    duration: string,
    instructor: Schema.Types.ObjectId;
    whatYouWillLearn?: string;
    courseContent?: Schema.Types.ObjectId[];
    ratingAndReviews?: Schema.Types.ObjectId[];
    price: number;
    thumbnail?: string;
    tag?: Schema.Types.ObjectId[];
    category: Schema.Types.ObjectId;
    studentsEnrolled?: Schema.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

const courseSchema: Schema<ICourse> = new Schema(
    {
        courseName:{ type:String, required:true },
        courseDescription:{ type:String, default:"" },
        duration:{type: String, default:""},
        instructor:{ type:Schema.Types.ObjectId, ref:"User", required:true },
        whatYouWillLearn:{ type:String, default:"" },
        courseContent:[{ type:Schema.Types.ObjectId, ref:"Section" }],
        ratingAndReviews:[{ type:Schema.Types.ObjectId, ref:"RatingAndReview" }],
        price:{ type:Number, min:0, default:0 },
        thumbnail:{ type:String, default:"" },
        tag:[{ type:Schema.Types.ObjectId, ref:"Tag" }],
        category:{ type:Schema.Types.ObjectId, ref:"Category", required:true },
        studentsEnrolled:[{ type:Schema.Types.ObjectId, ref:"User" }]
    },
    { timestamps:true }
);

const Course: Model<ICourse> = model("Course",courseSchema);
export default Course;



