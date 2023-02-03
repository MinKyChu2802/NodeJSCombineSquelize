import sequelize from "../config";
import { DataTypes } from "sequelize";
import { initReview } from "./reviewModel";
import { initUser } from "./userModel";

export const User = initUser(sequelize, DataTypes);
export const Review = initReview(sequelize, DataTypes);

// db.sequelize.sync({ force: false }).then(() => console.log("re-sync done"));
