import { z } from 'zod';

export const issueSchema = z.object({
  title: z.string().min(1, 'title is required').max(255),
  description: z.string().min(1, 'Description is required').max(255),
});

export type NewIssueForm = z.infer<typeof issueSchema>;