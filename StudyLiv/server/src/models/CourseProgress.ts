import { Schema, Model, Document,model } from "mongoose";

export interface ICourseProgress extends Document {
    courseId: Schema.Types.ObjectId;
    progress: Schema.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

const courseProgressSchema: Schema<ICourseProgress> = new Schema(
    {
        courseId:{ type:Schema.Types.ObjectId, ref:"Course" },
        progress:[{ type:Schema.Types.ObjectId, ref:"SubSection" }]
    },
    {
        timestamps:true
    }
);

const CourseProgress: Model<ICourseProgress> = model("CourseProgress",courseProgressSchema);
export default CourseProgress;


