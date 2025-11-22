import { Document, Model } from "mongoose";
export interface IOtp extends Document {
    email: string;
    otp: string;
    createdAt: Date;
}
declare const Otp: Model<IOtp>;
export default Otp;
//# sourceMappingURL=Otp.d.ts.map