import { Request, Response } from 'express';
export declare const folderName: string;
export declare const createsubSection: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<{
    subsectionDetails: import("mongoose").Document<unknown, {}, import("../models/SubSection").ISubSection, {}, {}> & import("../models/SubSection").ISubSection & Required<{
        _id: unknown;
    }> & {
        __v: number;
    };
    updatedSectionDetails: import("../models/Section").ISection;
}>, Record<string, any>>>;
export declare const updatesubSection: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<import("mongoose").Document<unknown, {}, import("../models/SubSection").ISubSection, {}, {}> & import("../models/SubSection").ISubSection & Required<{
    _id: unknown;
}> & {
    __v: number;
}>, Record<string, any>>>;
export declare const deleteSubSection: (req: Request, res: Response) => Promise<Response<import("../utils/response").ApiResponse<null>, Record<string, any>> | Response<import("../utils/response").ApiResponse<{
    deletedSubSection: import("mongoose").Document<unknown, {}, import("../models/SubSection").ISubSection, {}, {}> & import("../models/SubSection").ISubSection & Required<{
        _id: unknown;
    }> & {
        __v: number;
    };
    updatedSection: import("../models/Section").ISection;
}>, Record<string, any>>>;
//# sourceMappingURL=SubSection.d.ts.map