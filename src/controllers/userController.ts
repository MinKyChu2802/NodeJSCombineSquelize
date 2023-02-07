import { Review, User } from "../models";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

// main work

// 1. create user

const addUser = async (req: Request, res: Response) => {
  const { username, password, isAdmin } = req.body;
  let info = {
    id: uuidv4(),
    username,
    password,
    isAdmin,
  };

  const user = await User.create(info);

  res.status(200).send(user);
  console.log(user);
};

// 2 get all user

const getAllUser = async (req: Request, res: Response) => {
  let users = await User.findAll({
    attributes: ["username", "isAdmin"],
  });
  res.status(200).send(users);
};

// 3 get single user

const getOneUser = async (req: Request, res: Response) => {
  let id = req.params.id;

  let user = await User.findOne({
    where: { id },
    attributes: ["username", "isAdmin"],
  });
  res.status(200).send(user);
};

// 4 update single user

const updateUser = async (req: Request, res: Response) => {
  let id = req.params.id;

  let user = await User.update(req.body, { where: { id } });
  res.status(200).send(user);
};

// 5 delete single user

const deleteUser = async (req: Request, res: Response) => {
  let id = req.params.id;

  await User.destroy({ where: { id } });
  res.status(200).send("User is deleted!");
};

// 6. connect one to many relation User and Reviews

// const getUserReviews =async (req:Request, res:Response) => {
//   let id = req.body.id
//   const users = await User.findAll({
//     include:[{
//       model: Review,
//       as: 'review'
//     }],
//     where: {id}
//   })
// }

export const userController = {
  getAllUser,
  getOneUser,
  updateUser,
  deleteUser,
  addUser,
};
