import { z } from "zod";

export const expenseSchema = z.object({
    description: z.string({ required_error: 'Description is required' }).min(10, {
        message: 'Description must be at least 10 characters long'
    }).max(100, {
        message: 'Description must be at most 100 characters long'
    }
    ),
    amount: z.number({ required_error: 'Amount is required' }),
    category: z.string({ required_error: 'Category is required' }).min(3, {
        message: 'Category must be at least 10 characters long'
    }).max(100, {
        message: 'Category must be at most 100 characters long'
    }
    ),
})