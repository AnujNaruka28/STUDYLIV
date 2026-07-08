import { z } from 'zod';
import { baseUserZodSchema } from './base.validation';

export const contactZodSchema = baseUserZodSchema.extend({
    message: z.string().min(50, "Message is required"),
});

export type ContactInput = z.infer<typeof contactZodSchema>;