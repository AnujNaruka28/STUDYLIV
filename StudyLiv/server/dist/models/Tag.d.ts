import { Schema, Document, Model } from "mongoose";
export interface ITag extends Document {
    name: string;
    description?: string;
    courses?: Schema.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}
declare const Tag: Model<ITag>;
export default Tag;
//# sourceMappingURL=Tag.d.ts.map