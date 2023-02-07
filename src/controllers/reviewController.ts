import { Review } from "../models";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

// main work

// 1. create review

const addReview = async (req: Request, res: Response) => {
  const { rating, description } = req.body;
  let info = {
    id: uuidv4(),
    rating,
    description,
    userId: null
  };

  const review = await Review.create(info);

  res.status(200).send(review);
  console.log(review);
};

// 2 get all review

const getAllReview = async (req: Request, res: Response) => {
  let reviews = await Review.findAll({
    attributes: ["rating", "description"],
  });
  res.status(200).send(reviews);
};

// 3 get single review

const getOneReview = async (req: Request, res: Response) => {
  let id = req.params.id;

  let review = await Review.findOne({
    where: { id },
    attributes: ["rating", "description"],
  });
  res.status(200).send(review);
};

// 4 update single review

const updateReview = async (req: Request, res: Response) => {
  let id = req.params.id;

  let review = await Review.update(req.body, { where: { id } });
  res.status(200).send(review);
};

// 5 delete single review

const deleteReview = async (req: Request, res: Response) => {
  let id = req.params.id;

  await Review.destroy({ where: { id } });
  res.status(200).send("Review is deleted!");
};

export const reviewController = {
  getAllReview,
  getOneReview,
  updateReview,
  deleteReview,
  addReview,
};
