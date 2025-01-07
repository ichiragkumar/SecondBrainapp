import {Request, Response} from "express";  
import {signinSchema} from "../zod/signin";
import User from "../models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export const accessAccount = async (req:Request, res:Response) => {
    try{

    const {email, password} = await req.body; 
    const userData = signinSchema.safeParse({email, password});
    if (!userData.success) {
      res.status(400).send(userData.error.issues[0].message);

    }


    const userDocument = await User.findOne({email});
    if (!userDocument) {
      res.status(400).send("User not found");
      return;
    }

    const isPasswordCorrect = await bcrypt.compare(password, userDocument.password);
    if (!isPasswordCorrect) {
      res.status(400).send("Incorrect password");
      return;
    }


    const token = jwt.sign(
      { userId: userDocument._id.toString() }, 
      process.env.JWT_SECRET_KEY!,           
      { expiresIn: '1h' }                
    );

    res.status(201).send({ message: "Account Access successfully", token });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Error creating account", error });

  }
};