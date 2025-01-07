"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var signup_1 = require("../controllers/signup");
var signin_1 = require("../controllers/signin");
var auth_1 = require("../middlewares/auth");
var addContent_1 = require("../controllers/addContent");
var UserContents_1 = require("../controllers/UserContents");
var deleteContent_1 = require("../controllers/deleteContent");
var router = express_1.default.Router();
router.post("/signup", signup_1.createAccount);
router.post("/signin", signin_1.accessAccount);
router.post("/content", auth_1.UserMiddleware, addContent_1.addContent);
router.get("/contents", auth_1.UserMiddleware, UserContents_1.UserContents);
router.patch("/delete", auth_1.UserMiddleware, deleteContent_1.deleteContent);
exports.default = router;
