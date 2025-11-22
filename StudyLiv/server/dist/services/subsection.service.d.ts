import { Types } from "mongoose";
import { ISubSection } from "../models/SubSection";
import { SubSectionInput } from "../validations/subsection.validation";
export declare const createSubSection: (data: SubSectionInput) => Promise<import("mongoose").Document<unknown, {}, ISubSection, {}, {}> & ISubSection & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare const updateSubSection: (subsectionId: Types.ObjectId, data: Partial<Pick<ISubSection, "title" | "description" | "duration" | "videoUrl">>) => Promise<(import("mongoose").Document<unknown, {}, ISubSection, {}, {}> & ISubSection & Required<{
    _id: unknown;
}> & {
    __v: number;
}) | null>;
export declare const deleteSubSectionById: (subsectionId: Types.ObjectId) => Promise<(import("mongoose").Document<unknown, {}, ISubSection, {}, {}> & ISubSection & Required<{
    _id: unknown;
}> & {
    __v: number;
}) | null>;
export declare const findSubSectionById: (subsectionId: Types.ObjectId) => Promise<(import("mongoose").Document<unknown, {}, ISubSection, {}, {}> & ISubSection & Required<{
    _id: unknown;
}> & {
    __v: number;
}) | null>;
//# sourceMappingURL=subsection.service.d.ts.map