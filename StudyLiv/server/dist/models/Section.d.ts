import { Schema, Document, Model } from "mongoose";
export interface ISection extends Document {
    sectionName: string;
    subSection: Schema.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}
declare const Section: Model<ISection>;
export default Section;
//# sourceMappingURL=Section.d.ts.map