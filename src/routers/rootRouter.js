import express from "express";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  handleSee,
} from "../controllers/userController";
import { handleSearch, handleHome } from "../controllers/videoController";

const rootRouter = express.Router();

rootRouter.get("/", handleHome);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.get("/search", handleSearch);
rootRouter.get("/:id", handleSee);

export default rootRouter;
