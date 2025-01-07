import User from "../models/UserModel";
import  {Request, Response} from "express";
import {signupSchema} from "../zod/signup";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const createAccount = async (req:Request, res:Response) => {
  try {
    const {name, email, password} = req.body;
    const signupSchemaResult = signupSchema.safeParse({name, email, password});
    if (!signupSchemaResult.success) {
      res.status(400).send(signupSchemaResult.error.issues[0].message);
      return;
    }

    const userDocument = await User.findOne({email});
    console.log(userDocument)
    if (userDocument) {
         res.status(400).send("User already exists");
         return;
    }

    const hashPassword = await bcrypt.hash(password, 10);
    if (!hashPassword) {
      res.status(500).send("Error hashing password");
      return;
    }
    const newUser = new User({name, email,password: hashPassword});
    await newUser.save();

    

    res.status(201).send({ message: "Account created successfully" });

    return;
  } catch (error) {
    console.error("Error creating account:", error);
    res.status(500).send("Error creating account");
    return;
  }
};

