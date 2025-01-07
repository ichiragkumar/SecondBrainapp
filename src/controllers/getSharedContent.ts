import Content from "../models/ContentModel";
import User from "../models/UserModel";
import { Request, Response } from "express";


export const getSharedContent = async (req:Request, res:Response) => {
  try {
    console.log("reach here")
    //@ts-ignore
    const { username } = req.params;
    const user = await User.findOne({ name: username });

    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
    }


    const sharedContent = await Content.find({
      userId: user._id,
      share: true,
      isActive: true,
    });

    if (sharedContent.length === 0) {
       res.status(404).json({ message: "No shared content found" });
       return;
    }

    res.status(200).json({
      message: `Shared content for ${username}`,
      content: sharedContent,
    });
    return;
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
    return;
  }
};

module.exports = { getSharedContent };
