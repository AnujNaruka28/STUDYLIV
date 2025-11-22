import { Model, Document } from "mongoose";
export type Gender = "male" | "female" | "other";
export interface IProfile extends Document {
    userName: string;
    profession?: string;
    dateOfBirth?: Date;
    gender: Gender;
    about?: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const Profile: Model<IProfile>;
export default Profile;
//# sourceMappingURL=Profile.d.ts.map