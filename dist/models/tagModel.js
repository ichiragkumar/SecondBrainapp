"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var tagSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true }
});
var Tag = mongoose.model('Tag', tagSchema);
exports.default = Tag;
