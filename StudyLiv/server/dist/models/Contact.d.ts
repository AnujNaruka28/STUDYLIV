import { Model } from "mongoose";
import { IBaseUser } from "./BaseUser";
export interface IContact extends IBaseUser {
    message: string;
}
declare const Contact: Model<IContact>;
export default Contact;
//# sourceMappingURL=Contact.d.ts.map