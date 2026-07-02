import Profile, { IProfile } from "../models/Profile";
import { ProfileInput } from "../validations/profile.validation";

export const findProfileById = async (profileId: string): Promise<IProfile | null> => {
    return await Profile.findById(profileId);
};

export const updateProfileById = async (
    profileId: string,
    updates: Partial<ProfileInput>
): Promise<IProfile | null> => {
    return await Profile.findByIdAndUpdate(profileId, updates, { new: true });
};

export const deleteProfileById = async (profileId: string): Promise<IProfile | null> => {
    return await Profile.findByIdAndDelete(profileId);
};


