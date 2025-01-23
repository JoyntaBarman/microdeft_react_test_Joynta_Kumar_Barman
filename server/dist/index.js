"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var allRoutes_1 = __importDefault(require("./routes/allRoutes"));
var body_parser_1 = __importDefault(require("body-parser"));
var port = 5000;
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use((0, body_parser_1.default)());
app.use(allRoutes_1.default);
// return message if no route matches 
app.use('*', function (req, res) {
    res.json({ success: false, message: "Not found." });
});
app.listen(port, function () {
    console.log("Express is running at ", port);
});
