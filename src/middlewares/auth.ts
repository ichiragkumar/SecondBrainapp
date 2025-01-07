import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";



export const UserMiddleware   = (req: Request, res: Response, next: NextFunction) => {

    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
       res.status(401).send("Access denied. No token provided.");   
       return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!) as { 
        userId: string; 
        email: string 
      };
      
    
      if(decoded){
        //@ts-ignore
        req.userId = decoded.userId;
        next();
      }else{
        res.status(401).send("Access denied. No token provided.");
        return;
      }


}