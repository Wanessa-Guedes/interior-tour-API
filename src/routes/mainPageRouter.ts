import { Router } from "express";
import {
  getCities,
  getCityAndUser,
} from "../controllers/mainPageController.js";
import { validateToken } from "../middlewares/tokenValidator.js";

const mainPageRouter = Router();

mainPageRouter.get("/main", getCities);
mainPageRouter.get("/main/reg", validateToken, getCityAndUser);

export default mainPageRouter;
