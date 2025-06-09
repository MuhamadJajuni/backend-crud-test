import { Sequelize } from "sequelize";
import { development } from "../config/config.js";
import UserModel from "./user.js";

const sequelize = new Sequelize(
  development.database,
  development.username,
  development.password,
  development
);

const db = {
  Sequelize,
  sequelize,
  User: UserModel(sequelize),
};

export default db;
