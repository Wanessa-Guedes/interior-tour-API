import { Router } from "express";
import {
  postFavorite,
  postUnfavorite,
} from "../controllers/toogleFavoriteController.js";

import { validateToken } from "../middlewares/tokenValidator.js";

const toogleFavoriteRouter = Router();

toogleFavoriteRouter.post(
  "/main/:cityId/favorite",
  validateToken,
  postFavorite
);
toogleFavoriteRouter.post(
  "/main/:cityId/unfavorite",
  validateToken,
  postUnfavorite
);

export default toogleFavoriteRouter;
