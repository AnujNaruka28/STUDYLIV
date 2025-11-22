import { IProfile } from "../models/Profile";
import { ProfileInput } from "../validations/profile.validation";
export declare const findProfileById: (profileId: string) => Promise<IProfile | null>;
export declare const updateProfileById: (profileId: string, updates: Partial<ProfileInput>) => Promise<IProfile | null>;
export declare const deleteProfileById: (profileId: string) => Promise<IProfile | null>;
//# sourceMappingURL=profile.service.d.ts.map