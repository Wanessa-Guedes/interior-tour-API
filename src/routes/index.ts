import { Router } from "express";
import authRouter from "./authRouter.js";
import commentsRouter from "./commentsRouter.js";
import mainPageRouter from "./mainPageRouter.js";
import toogleFavoriteRouter from "./toogleFavoriteRouter.js";
import toogleLikeRouter from "./tooglelikeRouter.js";
import toogleVisitedRouter from "./toogleVisitedRouter.js";

const router = Router();

router.use(mainPageRouter);
router.use(authRouter);
router.use(toogleLikeRouter);
router.use(toogleFavoriteRouter);
router.use(toogleVisitedRouter);
router.use(commentsRouter);

export default router;
