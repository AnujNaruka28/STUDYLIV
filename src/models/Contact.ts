import { Schema, Model, model } from "mongoose";
import { IBaseUser } from "./BaseUser";

export interface IContact extends IBaseUser {
    message: string;
}

const contactSchema: Schema<IContact> = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        message: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

const Contact: Model<IContact> = model("Contact", contactSchema);
export default Contact;