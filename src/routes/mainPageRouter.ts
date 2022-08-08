import { Router } from "express";
import {
  getCities,
  getCitiesByState,
  getCityAndUser,
} from "../controllers/mainPageController.js";
import { validateToken } from "../middlewares/tokenValidator.js";

const mainPageRouter = Router();

mainPageRouter.get("/main", getCities);
mainPageRouter.get("/main/reg", validateToken, getCityAndUser);
mainPageRouter.get("/state/:stateId/cities", getCitiesByState);

export default mainPageRouter;
