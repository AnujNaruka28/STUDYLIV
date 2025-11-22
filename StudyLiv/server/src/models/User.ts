import { Schema, Model, model } from "mongoose";
import { IBaseUser } from "./BaseUser";

export interface IUser extends IBaseUser {
    profileImage: string;
    password: string;
    confirmPassword: string;
    token?: string;
    resetPasswordExpires?: Date;
    additionalDetails: Schema.Types.ObjectId;
    accountType: "Admin" | "Student" | "Instructor";
    courses?: Schema.Types.ObjectId[];
    courseProgress?: Schema.Types.ObjectId[];
    otp?: Schema.Types.ObjectId;
}
const userSchema: Schema<IUser> = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        profileImage: { type: String, required: true },
        phoneNumber: { type: String, required: true, length: 10 },
        password: { type: String, required: true },
        confirmPassword: {type: String, required: true},
        token: { type: String },
        resetPasswordExpires: { type: Date },
        additionalDetails: { type: Schema.Types.ObjectId, ref: "Profile", required: true },
        accountType: { type: String, enum: ["Admin", "Student", "Instructor"], required: true },
        courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
        courseProgress: [{ type: Schema.Types.ObjectId, ref: "CourseProgress" }],
        otp: {type: Schema.Types.ObjectId, ref: "Otp"}
    },
    {
        timestamps: true
    }
);

const User: Model<IUser> = model<IUser>("User", userSchema);
export default User;
