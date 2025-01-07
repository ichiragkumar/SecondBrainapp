"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupSchema = void 0;
var zod_1 = require("zod");
exports.signupSchema = zod_1.z.object({
    name: zod_1.z.string().min(3).max(30).optional(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8).max(30),
});
