import { Schema, Model, Document, model } from "mongoose";

export interface ICategory extends Document {
    name: string;
    description?: string;
    courses: Schema.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

const categorySchema: Schema<ICategory> = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        description:{
            type:String
        },
        courses:[
            {
                type:Schema.Types.ObjectId,
                ref:"Course"
            }
        ]
    },
    {
        timestamps:true
    }
);

const Category: Model<ICategory> = model("Category",categorySchema);
export default Category;
