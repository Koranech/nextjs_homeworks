import {z} from 'zod';

export const carSchema = z.object({
    brand: z.string().min(1, 'Min 1').max(20, 'Max 20'),
    price: z.coerce.number().min(0, 'Min 0').max(1000000, 'Max 1.000.000'),
    year: z.coerce.number().min(1990, 'Min 1990').max(2026, 'Max 2026'),
})

export type UserFormData = z.infer<typeof carSchema>;
export type UserFormInput = z.input<typeof carSchema>;
