


import {z} from "zod";

export const signupSchema = z.object({
  name: z.string().min(3).max(30).optional(),   
  email: z.string().email(),
  password: z.string().min(8).max(30),
});