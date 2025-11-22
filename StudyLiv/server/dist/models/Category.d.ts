import { Schema, Model, Document } from "mongoose";
export interface ICategory extends Document {
    name: string;
    description?: string;
    courses: Schema.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}
declare const Category: Model<ICategory>;
export default Category;
//# sourceMappingURL=Category.d.ts.map