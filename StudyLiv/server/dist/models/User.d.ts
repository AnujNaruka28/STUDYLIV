import { Schema, Model } from "mongoose";
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
declare const User: Model<IUser>;
export default User;
//# sourceMappingURL=User.d.ts.map