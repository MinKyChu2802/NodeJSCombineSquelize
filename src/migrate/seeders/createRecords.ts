import type { QueryInterface } from "sequelize";

const format = (objs: { createdAt: number; updatedAt: number; [key: string]: any }[]) =>
  objs.map((obj) => ({ ...obj, createdAt: new Date(obj.createdAt * 1000), updatedAt: new Date(obj.updatedAt * 1000) }));

const users:any[] = [];

const createTables = {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert("Users", format(users), {});
  },
};

export default createTables;