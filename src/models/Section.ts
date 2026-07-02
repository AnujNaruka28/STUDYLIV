import {Schema, Document, Model, model} from "mongoose";

export interface ISection extends Document {
    sectionName: string;
    subSection: Schema.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

const sectionSchema: Schema<ISection>  = new Schema(
    {
        sectionName: { 
            type: String, 
            maxLength: 500, 
            required: true 
        },
        subSection: [
            { 
                type: Schema.Types.ObjectId, 
                required: true, 
                ref: "SubSection" 
            }
        ]
    },
    {
        timestamps: true
    }
);

const Section: Model<ISection> = model("Section", sectionSchema);
export default Section;