import { Model, Sequelize } from "sequelize";
import { ReviewModel } from "../types";

export interface ReviewAttributes {
  rating: string;
  description: string;
}
interface IReviewModel extends Model<ReviewModel>, ReviewModel {}


export const initReview = (sequelize: Sequelize, DataTypes: any) => {
  const attributes = {
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
  };

  return sequelize.define<IReviewModel>("Review", attributes, options);
};
