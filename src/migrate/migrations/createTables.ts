import { DataTypes, QueryInterface } from "sequelize";
import { initUser } from "../../models/userModel";

const createTables = {
  up: async (queryInterface: QueryInterface) => {
    initUser(queryInterface.sequelize, DataTypes).sync({ force: true });
  },
};

export default createTables;
