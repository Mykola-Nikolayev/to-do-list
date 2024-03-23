"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsConnectedMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class IsConnectedMiddleware {
    execute(req, res, next) {
        var _a;
        try {
            const authToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
            if (!authToken) {
                res.status(401).send({
                    error: 'No token'
                });
                return;
            }
            const jwtSecret = process.env.JWT_SECRET;
            if (!jwtSecret) {
                res.status(500).send('jwt secret is not defined');
                return;
            }
            req.user = jsonwebtoken_1.default.verify(authToken, jwtSecret);
            next();
        }
        catch (error) {
            console.error(error);
            res.status(401).send({ error: error.message });
        }
    }
}
exports.IsConnectedMiddleware = IsConnectedMiddleware;
