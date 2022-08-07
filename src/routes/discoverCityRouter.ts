import { Router } from "express";
import { getCityById } from "../controllers/discoverCityController.js";

const discoverCityRouter = Router();

discoverCityRouter.get("/city/:cityId", getCityById);

export default discoverCityRouter;
