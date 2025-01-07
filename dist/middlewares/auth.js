"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMiddleware = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var UserMiddleware = function (req, res, next) {
    var _a;
    var token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
    if (!token) {
        res.status(401).send("Access denied. No token provided.");
        return;
    }
    var decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY);
    if (decoded) {
        //@ts-ignore
        req.userId = decoded.userId;
        next();
    }
    else {
        res.status(401).send("Access denied. No token provided.");
        return;
    }
};
exports.UserMiddleware = UserMiddleware;
