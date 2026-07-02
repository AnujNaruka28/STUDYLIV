import Razorpay from "razorpay";
import { ENV as env } from "../validations/env.validation";

const razorpayInstance = new Razorpay({
    key_id: env.RAZORPAY_ID,
    key_secret: env.RAZORPAY_SECRET,
    headers: {"X-Razorpay-Account":"acc_xyz"}
});

export default razorpayInstance;
