import { Router } from "express";
import {
  postUnvisited,
  postVisited,
} from "../controllers/toogleVisitedController.js";
import { validateToken } from "../middlewares/tokenValidator.js";

const toogleVisitedRouter = Router();

toogleVisitedRouter.post("/main/:cityId/visited", validateToken, postVisited);
toogleVisitedRouter.post(
  "/main/:cityId/unvisited",
  validateToken,
  postUnvisited
);

export default toogleVisitedRouter;
