import mongoose from "mongoose";
import { ENV as env } from "../validations/env.validation";



const dbConnect = async (): Promise<void> => {

    await mongoose.connect(env.DATABASE_URL as string)
    .then(() => console.log('Database connection successful...'))
    .catch((err: any) => {
        console.log('Database connection failed...');
        console.error(err.message);
        process.exit(1);
    });

}; 

export default dbConnect;


