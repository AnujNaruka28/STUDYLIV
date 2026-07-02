import {Schema,Document,Model,model} from "mongoose";
// import {mailSender} from "../utils/mailSender";

export interface IOtp extends Document {
    email: string;
    otp: string;
    createdAt: Date;
}

const otpSchema: Schema<IOtp> = new Schema(
    {
        email:{ type:String, required:true },
        otp:{ type:String, required:true },
        createdAt:{ type:Date, default:Date.now(), expires:5*60 }
    }
);

// async function sendverificationEmail(email: string,otp: string) {
//     try {
//         const mailResponse = await mailSender(email,"Verify the email with this otp: ",otp);
//         console.log("Mail send successfully",mailResponse);
//     } catch (err: any) {
//         console.log("Error while sending verification mail",err.message);
//         throw err;
//     }
// }

// otpSchema.pre("save", async function (this: IOtp, next) {
//     await sendverificationEmail(this.email, this.otp);
//     next();
// });

const Otp: Model<IOtp> = model("Otp",otpSchema);
export default Otp;

