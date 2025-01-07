"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinSchema = void 0;
var zod_1 = require("zod");
exports.signinSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8).max(30),
});
