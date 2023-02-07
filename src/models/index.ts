import sequelize from "../config";
import { DataTypes } from "sequelize";
import { initReview } from "./reviewModel";
import { initUser } from "./userModel";

export const User = initUser(sequelize, DataTypes);
export const Review = initReview(sequelize, DataTypes);

// 1 to Many Relation
User.hasMany(Review, {
  foreignKey: "id",
  as: "reviewId",
});

Review.belongsTo(User, {
  foreignKey: "id",
  as: "userId",
});

// db.sequelize.sync({ force: false }).then(() => console.log("re-sync done"));
