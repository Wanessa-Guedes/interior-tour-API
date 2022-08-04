import { Router } from "express";
import { insertComments } from "../controllers/commentsController.js";
import { validateToken } from "../middlewares/tokenValidator.js";

const commentsRouter = Router();

commentsRouter.post(
  "/infoCity/insertComment/:cityId",
  validateToken,
  insertComments
);

export default commentsRouter;
