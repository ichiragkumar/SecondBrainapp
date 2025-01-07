"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentSchema = void 0;
var zod_1 = require("zod");
exports.contentSchema = zod_1.z.object({
    title: zod_1.z.string().min(3).max(30),
    type: zod_1.z.enum(["image", "video", "article", "links", "audio"]),
    tags: zod_1.z.array(zod_1.z.string()).min(1),
    link: zod_1.z.string().url(),
});
