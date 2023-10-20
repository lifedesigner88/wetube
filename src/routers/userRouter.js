import express from "express";
import {
  handleEdit,
  handleDelet,
  handleLogout,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", handleLogout);
userRouter.get("/edit", handleEdit);
userRouter.get("/delete", handleDelet);

export default userRouter;
