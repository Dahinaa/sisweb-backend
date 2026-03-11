"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./src/routes"));
const connection_1 = require("./src/connection/connection");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(routes_1.default);
connection_1.sequelize.sync()
    .then(() => {
    console.log("Database connected");
})
    .catch((err) => {
    console.log("Database error:", err);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
