import dotenv from "dotenv";
dotenv.config();


import connectDB from "./config/db";
import express, {Request, Response} from "express";
import router from "./routes/user";


const app = express();
app.use(express.json());



app.use("/api/v1", router);

app.get("/", (req:Request, res:Response) => {
  res.send("Hello World!");
});

app.listen(3000, async () => {
   await  connectDB();
  console.log("Server is running on port 3000");
});