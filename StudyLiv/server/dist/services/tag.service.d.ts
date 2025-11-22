import { ITag } from "../models/Tag";
import { TagInput } from "../validations/tag.validation";
export declare const getSingleTag: (name: string) => Promise<ITag | null>;
export declare const createTag: (data: TagInput) => Promise<ITag>;
export declare const fetchTags: () => Promise<ITag[]>;
//# sourceMappingURL=tag.service.d.ts.map