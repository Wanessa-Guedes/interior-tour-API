import { Router } from "express";
import { validateToken } from "../middlewares/tokenValidator.js";

const toogleVisitedRouter = Router();

toogleVisitedRouter.post("/main/:cityId/visited", validateToken);
toogleVisitedRouter.post("/main/:cityId/unvisited", validateToken);

export default toogleVisitedRouter;
