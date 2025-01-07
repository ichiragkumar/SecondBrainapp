import { Request, Response } from "express";
import Content from "../models/ContentModel";
export const shareContent = async (req: Request, res: Response) => {
  try {
    const content = await Content.find(
      {
        share:true,
        //@ts-ignore
        userId:req.userId
      }
    ).populate("userId", "name");
    if (!content) {
       res.status(404).json({ message: "Content not found" });
       return;
    }
    //@ts-ignore
    const userName = content[0]?.userId?.name; 
    if(!userName){
      res.status(404).json({ message: "User  not found" });
      return;
    }


  
    const shareUrl = process.env.USER_SHARE_URL;


    res.status(200).json({
      message: "Content shared successfully",
      share: `${shareUrl}/${userName}/`,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
