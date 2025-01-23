"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var data_1 = require("../constant/data");
var connectDB_1 = require("../db/connectDB");
var ProjectSchema_1 = require("../model/ProjectSchema");
var messageSchema_1 = require("../model/messageSchema");
var AllRoute = express_1.default.Router();
// single project
AllRoute.get("/project/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, index, data, error_1;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
                index = parseInt(id) - 1;
                if (!!((_b = process.env) === null || _b === void 0 ? void 0 : _b.DB_CONNECTION_URL)) return [3 /*break*/, 1];
                res.json({
                    success: true,
                    message: "All project data from locally.",
                    data: data_1.projectData[index],
                });
                return [2 /*return*/];
            case 1:
                _c.trys.push([1, 4, , 5]);
                return [4 /*yield*/, (0, connectDB_1.connectDB)()];
            case 2:
                _c.sent();
                return [4 /*yield*/, ProjectSchema_1.Project.findOne({ id: id })];
            case 3:
                data = _c.sent();
                res.json({
                    success: true,
                    message: "All project data from database.",
                    data: data,
                });
                return [3 /*break*/, 5];
            case 4:
                error_1 = _c.sent();
                console.log("some thing is worong.", error_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
// all projects
AllRoute.get("/projects", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_2;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!!((_a = process.env) === null || _a === void 0 ? void 0 : _a.DB_CONNECTION_URL)) return [3 /*break*/, 1];
                res.json({
                    success: true,
                    message: "All project data.",
                    data: data_1.projectData,
                });
                return [2 /*return*/];
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, (0, connectDB_1.connectDB)()];
            case 2:
                _b.sent();
                return [4 /*yield*/, ProjectSchema_1.Project.find({ type: "project" })];
            case 3:
                data = _b.sent();
                res.json({ success: true, message: "All project data.", data: data });
                return [3 /*break*/, 5];
            case 4:
                error_2 = _b.sent();
                console.log("some thing is worong.", error_2);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
// work data
AllRoute.get("/work", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_3;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!!((_a = process.env) === null || _a === void 0 ? void 0 : _a.DB_CONNECTION_URL)) return [3 /*break*/, 1];
                res.json({
                    success: true,
                    message: "All project data.",
                    data: data_1.projectData,
                });
                return [2 /*return*/];
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, (0, connectDB_1.connectDB)()];
            case 2:
                _b.sent();
                return [4 /*yield*/, ProjectSchema_1.Project.find({})];
            case 3:
                data = _b.sent();
                res.json({ success: true, message: "All project data.", data: data });
                return [3 /*break*/, 5];
            case 4:
                error_3 = _b.sent();
                console.log("some thing is worong.", error_3);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
AllRoute.post("/message", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, subject, message, messageData, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req === null || req === void 0 ? void 0 : req.body, name = _a.name, subject = _a.subject, message = _a.message;
                console.log(name);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, (0, connectDB_1.connectDB)()];
            case 2:
                _b.sent();
                if (!name || !subject || !message) {
                    res.json({ success: true, message: "Input valid data" });
                    return [2 /*return*/];
                }
                messageData = new messageSchema_1.Message({ name: name, subject: subject, message: message });
                return [4 /*yield*/, messageData.save()];
            case 3:
                _b.sent();
                res.json({ success: true, message: "successfully add data" });
                return [3 /*break*/, 5];
            case 4:
                err_1 = _b.sent();
                console.log("somethitng wrong.", err_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
exports.default = AllRoute;
