import { Schema, Model, Document } from "mongoose";
export interface ICourseProgress extends Document {
    courseId: Schema.Types.ObjectId;
    progress: Schema.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}
declare const CourseProgress: Model<ICourseProgress>;
export default CourseProgress;
//# sourceMappingURL=CourseProgress.d.ts.map