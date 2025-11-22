import { Request, Response } from 'express';
interface CreateTagRequest extends Request {
    body: {
        name: string;
        description?: string;
    };
}
export declare const createTagHandler: (req: CreateTagRequest, res: Response) => Promise<Response>;
export declare const getAllTagsHandler: (_req: Request, res: Response) => Promise<Response>;
export {};
//# sourceMappingURL=Tags.d.ts.map