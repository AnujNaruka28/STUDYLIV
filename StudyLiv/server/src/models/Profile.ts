import { Schema, Model, Document,model } from "mongoose";

export type Gender = "male" | "female" | "other";

export interface IProfile extends Document {
    userName: string;
    profession?: string;
    dateOfBirth?: string;
    gender: Gender;
    about?: string;
    createdAt: Date;
    updatedAt: Date;
}
const profileSchema: Schema<IProfile> = new Schema(
    {
        userName:{ 
            type:String, 
            trim:true, 
            required:true
        },
        profession:{ 
            type:String 
        },
        dateOfBirth:{ 
            type:String
        },
        gender:{ 
            type:String, 
            enum:["male","female","other"], 
            required:true 
        },
        about:{ 
            type:String, 
            maxLength:500 
        }
    },
    {
        timestamps: true
    }
);

const Profile: Model<IProfile> = model("Profile",profileSchema);
export default Profile;


