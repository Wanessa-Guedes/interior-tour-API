import { Router } from "express";
import {
  getCities,
  getCitiesByState,
} from "../controllers/mainPageController.js";

const mainPageRouter = Router();

mainPageRouter.get("/main", getCities);
mainPageRouter.get("/state/:stateId/cities", getCitiesByState);

export default mainPageRouter;
