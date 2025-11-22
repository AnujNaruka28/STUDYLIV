import { Document } from "mongoose";

// Base interface with common fields
export interface IBaseUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}