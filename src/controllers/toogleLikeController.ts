import { Request, Response } from "express";
import { toogleLikeServices } from "../services/toogleLikeServices.js";

export async function postLike(req: Request, res: Response) {
  const { userInfo } = res.locals;

  const cityId = +req.params.cityId;

  await toogleLikeServices.postLike(cityId, userInfo.userId);

  res.sendStatus(200);
}

export async function postDislike(req: Request, res: Response) {
  const { userInfo } = res.locals;

  const cityId = +req.params.cityId;

  await toogleLikeServices.postDislike(cityId, userInfo.userId);

  res.sendStatus(200);
}
