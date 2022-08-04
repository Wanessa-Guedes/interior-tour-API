import { Router } from "express";
import {
  getCityComments,
  insertComments,
} from "../controllers/commentsController.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { validateToken } from "../middlewares/tokenValidator.js";
import { commentSchema } from "../schemas/commentSchema.js";

const commentsRouter = Router();

commentsRouter.post(
  "/infocity/insertComment/:cityId",
  validateToken,
  schemaValidator(commentSchema.insertCommentSchema),
  insertComments
);

commentsRouter.get("/infocity/comments/:cityId", getCityComments);

export default commentsRouter;
