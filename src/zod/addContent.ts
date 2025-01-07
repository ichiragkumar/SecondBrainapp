import {z} from "zod";

export const contentSchema = z.object({
    title : z.string().min(3).max(30),
    type:z.enum(["image", "video", "article", "links", "audio"]),
    tags : z.array(z.string()).min(1),
    link: z.string().url(),
    
});