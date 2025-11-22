import Tag, { ITag } from "../models/Tag";
import { TagInput } from "../validations/tag.validation";

export const getSingleTag = async (name: string) : Promise<ITag|null> => {
    return await Tag.findOne({name});
};
export const createTag = async (data: TagInput): Promise<ITag> => {
    return await Tag.create(data);
};
export const fetchTags = async (): Promise<ITag[]> => {
    return await Tag.find({},{name: true,description: true});
};
