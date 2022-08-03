import { Request, Response } from "express";
import { toogleVisitedServices } from "../services/toogleVisitedServices.js";

export async function postVisited(req: Request, res: Response) {
  const { userInfo } = res.locals;

  const cityId = +req.params.cityId;

  await toogleVisitedServices.postVisited(cityId, userInfo.userId);

  res.sendStatus(200);
}

export async function postUnvisited(req: Request, res: Response) {
  const { userInfo } = res.locals;

  const cityId = +req.params.cityId;

  await toogleVisitedServices.postUnvisited(cityId, userInfo.userId);

  res.sendStatus(200);
}
