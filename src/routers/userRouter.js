import express from "express";
import {
  handleEdit,
  handleDelet,
  handleLogout,
  handleMyPage,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", handleLogout);
userRouter.get("/edit", handleEdit);
userRouter.get("/delete", handleDelet);
userRouter.get("/mypage", handleMyPage);

export default userRouter;
