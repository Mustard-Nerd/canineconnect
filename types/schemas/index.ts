import * as z from "zod";

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(50)
});

export const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(50),
    full_name: z.string().refine((value) => /^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{2,}){1}$/.test(value), 'Enter a valid name with first name and last name')
});