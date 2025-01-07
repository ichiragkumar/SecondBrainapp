

import express, {Request, Response} from "express";
import {createAccount} from "../controllers/signup";
import { accessAccount } from "../controllers/signin";
import { UserMiddleware } from "../middlewares/auth";
import { addContent } from "../controllers/addContent";
import {UserContents} from "../controllers/UserContents";
import {deleteContent} from "../controllers/deleteContent";
const router = express.Router();

router.post("/signup", createAccount);
router.post("/signin", accessAccount);
router.post("/content", UserMiddleware,addContent );
router.get("/contents", UserMiddleware, UserContents);
router.patch("/delete", UserMiddleware, deleteContent);

export default router;