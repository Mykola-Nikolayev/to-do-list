"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const authRouter = express_1.default.Router();
authRouter
    .get('/check-token', middlewares_1.isConnectedMiddleware.execute, controllers_1.authController.checkToken)
    .post('/login', controllers_1.authController.login)
    .post("/register", controllers_1.authController.register);
exports.default = authRouter;
