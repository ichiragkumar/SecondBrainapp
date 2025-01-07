import Content from "../models/ContentModel";
import User from "../models/UserModel";
import { Request, Response } from "express";

export const makeContentShareable = async (req:Request, res:Response) => {
  try {
    const { id } = req.query;

    if(!id){
        res.status(400).send({message: "Content id is required"});
        return;
    }


    const content = await Content.findById(id);
    if (!content) {
     res.status(404).json({ message: "Content not found" });
     return;
    }


    //@ts-ignore
    if(req.userId != content.userId){
        res.status(401).send({message: "You are not authorized to delete this content"});
        return;
    }



    content.share = !content.share;
    await content.save();
    res.status(200).json({ message: "Content shared successfully", content });
    return;
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};