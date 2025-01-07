
import {Request, Response} from "express";
import {contentSchema} from "../zod/addContent";
import Content from "../models/ContentModel";


export const addContent = async (req:Request, res:Response) => {
  try {

    const noteSchemaResult = contentSchema.safeParse(req.body);
    if (!noteSchemaResult.success) {
      res.status(400).json({
        message: noteSchemaResult.error
      })
      return;
    }

    const newContent = await Content.create({
      title: noteSchemaResult.data.title,
      type: noteSchemaResult.data.type,
      link: noteSchemaResult.data.link,
      tags:[],
      //@ts-ignore  

      userId: req.userId,
    });
    res.status(201).send({ message: "Content added successfully", data: newContent });
    
  } catch (error) {
    console.log(error)
    res.status(500).send("Error adding note");
  }
};