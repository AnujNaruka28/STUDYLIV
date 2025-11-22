import { Schema, Document, Model, model } from "mongoose";

export interface ITag extends Document {
    name: string;
    description?: string;
    courses?: Schema.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

const tagSchema: Schema<ITag> = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        courses: [{ type: Schema.Types.ObjectId, ref: "Course" }]
    },
    {
        timestamps: true
    }
);

const Tag: Model<ITag> = model<ITag>("Tag", tagSchema);
export default Tag;
