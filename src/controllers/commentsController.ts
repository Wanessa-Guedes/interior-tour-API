import { Request, Response } from "express";
import { commentsService } from "../services/commentsServices.js";

export async function insertComments(req: Request, res: Response) {
  const { userInfo } = res.locals;

  const cityId = +req.params.cityId;

  const { comment } = req.body;

  const commentData = {
    comment,
    userId: userInfo.userId,
    cityId,
  };

  await commentsService.insertComment(commentData);

  res.sendStatus(201);
}
