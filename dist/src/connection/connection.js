"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_1 = require("../models/user");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
    models: [user_1.User]
});
