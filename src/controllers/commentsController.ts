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

export async function getCityComments(req: Request, res: Response) {
  const cityId = +req.params.cityId;

  const comments = await commentsService.getCityComments(cityId);

  res.send(comments).status(200);
}

export async function updateComment(req: Request, res: Response) {
  const commentId = +req.params.commentId;

  const { comment } = req.body;

  await commentsService.updateComment(commentId, comment);

  res.sendStatus(200);
}
