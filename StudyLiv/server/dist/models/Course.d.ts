import { Schema, Model, Document } from "mongoose";
export interface ICourse extends Document {
    courseName: string;
    courseDescription?: string;
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
declare const Course: Model<ICourse>;
export default Course;
//# sourceMappingURL=Course.d.ts.map