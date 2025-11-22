import { IOtp } from "../models/Otp";
import { OtpInput } from "../validations/otp.validation";
export declare const createOtp: (otpInput: OtpInput) => Promise<IOtp>;
export declare const findLatestOtpByEmail: (email: string) => Promise<IOtp | null>;
export declare const verifyLatestOtp: (otpInput: OtpInput, providedOtp: string) => Promise<{
    ok: boolean;
    reason?: string;
    otpDoc?: IOtp | null;
}>;
//# sourceMappingURL=otp.service.d.ts.map