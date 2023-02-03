import express from "express";
import { userController } from "../controllers/userController";

const router = express.Router();

router.post("/user", userController.addUser);
router.get("/user", userController.getAllUser);
router.get("/user/:id", userController.getOneUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user:id", userController.deleteUser);

export default router