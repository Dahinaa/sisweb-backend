import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  models: [User]
});