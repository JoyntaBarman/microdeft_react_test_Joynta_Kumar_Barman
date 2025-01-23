"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var projectSchema = new mongoose_1.default.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ["project", "work"], // Assuming "project" and "work" are the only allowed types
    },
    color: {
        type: String,
        required: true,
    },
    client: {
        type: String,
        required: true,
    },
    work: {
        type: [String],
        required: true,
    },
    story: {
        type: [String],
        required: true,
    },
    day: {
        type: [String],
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
});
exports.Project = mongoose_1.default.models["Project"] || mongoose_1.default.model("Project", projectSchema);
