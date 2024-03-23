"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./src/routes"));
dotenv_1.default.config();
const uri = process.env.MONGODB_URI || "";
const PORT = 5060;
if (uri) {
    mongoose_1.default
        .connect(uri)
        .then(() => {
        console.log("DB connected !");
    })
        .catch((err) => console.log(err));
}
else {
    console.log("No URI to DB");
}
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/", routes_1.default);
app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT} => url : http://localhost:${PORT}`);
});
