import express from "express";
import morgan from "morgan";
import session from "express-session";

import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videosRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");
app.use(logger);

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "Hellow!",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/user", userRouter);
app.use("/videos", videosRouter);

export default app;
