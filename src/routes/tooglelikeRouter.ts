import { Router } from "express";
import { postDislike, postLike } from "../controllers/toogleLikeController.js";
import { validateToken } from "../middlewares/tokenValidator.js";

const toogleLikeRouter = Router();

toogleLikeRouter.post("/main/:cityId/like", validateToken, postLike);
toogleLikeRouter.post("/main/:cityId/dislike", validateToken, postDislike);

export default toogleLikeRouter;
