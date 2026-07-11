import {z} from 'zod';

export const userSchema = z.object({
    name: z.string().min(3, 'Min 3').max(100, 'Max 100'),
    email: z.string().email('Min 2'),
    password: z.string().min(6, 'Min 6'),
})

export type UserFormData = z.infer<typeof userSchema>;
