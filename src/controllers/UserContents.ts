import mongoose from "mongoose";
import Content from "../models/ContentModel";


export const UserContents = async (req:any, res:any) => {
    try{
        const userId = req.userId;
        const contents = await Content.find({userId: userId}).populate("userId","name");
        res.status(200).send({message: "Content fetched successfully", data: contents});
        return;
    } catch (error) {
        res.status(500).send("Error fetching content");
        return;
    }
};