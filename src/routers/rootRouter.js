import express from "express";
import {
  getJoin,
  postJoin,
  handleLogin,
  handleSee,
} from "../controllers/userController";
import { handleSearch, handleHome } from "../controllers/videoController";

const rootRouter = express.Router();

rootRouter.get("/", handleHome);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", handleLogin);
rootRouter.get("/search", handleSearch);
rootRouter.get("/:id", handleSee);

export default rootRouter;
