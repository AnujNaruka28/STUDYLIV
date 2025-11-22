import { Document, Model } from "mongoose";
export interface ISubSection extends Document {
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
declare const SubSection: Model<ISubSection>;
export default SubSection;
//# sourceMappingURL=SubSection.d.ts.map