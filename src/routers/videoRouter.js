import express from "express";
import {
  handleWatch,
  getEdit,
  postEdit,
  deleteVideo,
  getUpload,
  postUpload,
} from "../controllers/videoController";

const videosRouter = express.Router();

videosRouter.get("/upload", getUpload);
videosRouter.post("/upload", postUpload);
videosRouter.get("/:id([0-9a-f]{24})", handleWatch);
videosRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videosRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo);

export default videosRouter;
