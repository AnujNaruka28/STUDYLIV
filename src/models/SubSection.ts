import { Document, Model, Schema, model } from "mongoose";

export interface ISubSection extends Document{
    title: string;
    description: string;
    duration: string;
    videoUrl: string;
    contentType?: 'live' | 'video' | 'instructor_questions';
    practicetitle?: string;
    questions?: string[];
    createdAt: Date;
    updatedAt: Date;
}

const subSectionSchema: Schema<ISubSection> = new Schema(
    {
        title: { type: String, maxLength: 500, required: true },
        description: { type: String, maxLength: 500, required: true },
        duration: { type: String, required: true },
        videoUrl: { type: String, required: true },
        contentType: { type: String, enum: ['live', 'video', 'instructor_questions'] },
        practicetitle: { type: String },
        questions: [{ type: String }]
    },
    {
        timestamps: true
    }
);

const SubSection: Model<ISubSection> = model("SubSection",subSectionSchema);
export default SubSection;