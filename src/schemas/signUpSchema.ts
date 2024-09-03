import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(3, "Username must be atleas 3 characters")
    .max(20, "Username should be no more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not containe special characters")

export const signUpSchema = z.object({
    username : usernameValidation,
    email : z.string().email({message : "Invalid email address"}),
    password : z.string().min(6, {message : "Password must be atleast 6 character long"})
})