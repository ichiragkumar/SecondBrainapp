"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var contentType = ["document", "twitter", "youtube", "links", "other"];
var NoteSchema = new Schema({
    title: {
        type: String,
        default: "BrainLess Note",
    },
    type: {
        type: contentType,
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    link: {
        type: String,
        required: true,
    }
}, { timestamps: true });
var Note = mongoose_1.default.model("Note", NoteSchema);
exports.default = Note;
