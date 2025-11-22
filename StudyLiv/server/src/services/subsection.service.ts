import { Types } from "mongoose";
import SubSection, { ISubSection } from "../models/SubSection";
import { SubSectionInput } from "../validations/subsection.validation";

export const createSubSection = async (data: SubSectionInput) => {
    const subsection = await SubSection.create(data);
    return subsection;
};

export const updateSubSection = async (
    subsectionId: Types.ObjectId,
    data: Partial<Pick<ISubSection, 'title' | 'description' | 'duration' | 'videoUrl'>>
) => {
    return await SubSection.findByIdAndUpdate(subsectionId, data, { new: true });
};

export const deleteSubSectionById = async (subsectionId: string) => {
    return await SubSection.findByIdAndDelete(subsectionId);
};

export const findSubSectionById = async (subsectionId: string) => {
    return await SubSection.findById(subsectionId);
};


