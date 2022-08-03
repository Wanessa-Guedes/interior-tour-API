import { Request, Response } from "express";
import { toogleFavoriteService } from "../services/toogleFavoriteServices.js";

export async function postFavorite(req: Request, res: Response) {
  const { userInfo } = res.locals;

  const cityId = +req.params.cityId;

  await toogleFavoriteService.postFavorite(cityId, userInfo.userId);

  res.sendStatus(200);
}

export async function postUnfavorite(req: Request, res: Response) {
  const { userInfo } = res.locals;

  const cityId = +req.params.cityId;

  await toogleFavoriteService.postUnfavorite(cityId, userInfo.userId);

  res.sendStatus(200);
}
