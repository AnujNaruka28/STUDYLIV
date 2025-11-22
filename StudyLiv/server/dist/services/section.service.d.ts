import { ISection } from "../models/Section";
import { SectionInput } from "../validations/section.validation";
import { Types } from "mongoose";
export declare const createSection: (sectionData: SectionInput, courseId: Types.ObjectId) => Promise<{
    section: ISection;
    updatedCourse: any;
}>;
export declare const getSectionById: (sectionId: Types.ObjectId) => Promise<ISection | null>;
export declare const getSectionsByCourseId: (courseId: Types.ObjectId) => Promise<ISection[]>;
export declare const updateSection: (sectionId: Types.ObjectId, updateData: Partial<SectionInput>) => Promise<ISection | null>;
export declare const deleteSection: (sectionId: string, courseId: string) => Promise<{
    deletedSection: ISection;
    updatedCourse: any;
}>;
export declare const addSubSectionToSection: (sectionId: string, subSectionId: string) => Promise<ISection | null>;
export declare const removeSubSectionFromSection: (sectionId: string, subSectionId: string) => Promise<ISection | null>;
export declare const getAllSections: () => Promise<ISection[]>;
//# sourceMappingURL=section.service.d.ts.map