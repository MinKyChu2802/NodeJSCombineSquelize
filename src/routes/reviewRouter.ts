import express from "express";
import { reviewController } from "../controllers/reviewController";

const router = express.Router();

router.post("/review", reviewController.addReview);
router.get("/review", reviewController.getAllReview);
router.get("/review/:id", reviewController.getOneReview);
router.put("/review/:id", reviewController.updateReview);
router.delete("/review:id", reviewController.deleteReview);

export default router;
