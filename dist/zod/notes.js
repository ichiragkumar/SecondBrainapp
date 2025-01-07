"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteSchema = void 0;
var zod_1 = require("zod");
exports.noteSchema = zod_1.z.object({
    title: zod_1.z.string().min(3).max(30),
    type: zod_1.z.enum(["document", "twitter", "youtube", "links", "other"]),
    tags: zod_1.z.array(zod_1.z.string()).min(1),
    link: zod_1.z.string().url(),
    email: zod_1.z.string().email(),
});
