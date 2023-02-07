import { Model, ModelAttributes, Sequelize } from "sequelize";
import { ReviewModel } from "../types";

export interface ReviewAttributes {
  rating: string;
  description: string;
}
interface IReviewModel extends Model<ReviewModel>, ReviewModel {}

export const initReview = (sequelize: Sequelize, DataTypes: any) => {
  const attributes: ModelAttributes<IReviewModel, ReviewModel> = {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    // userId: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   // references: {
    //   //   model: "Users",
    //   //   key: "id",
    //   // },
    // },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };

  const options = {
    tableName: "reviews",
    timestamps: true,
    createdAt: false,

    // I want updatedAt to actually be called updateTimestamp
    updatedAt: "updateTimestamp",
  };

  return sequelize.define<IReviewModel>("Review", attributes, options);
};
