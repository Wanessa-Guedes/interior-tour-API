import { Request, Response } from "express";
import { mainPageServices } from "../services/mainPageservice.js";

export async function getCities(req: Request, res: Response) {
  const cities = await mainPageServices.getCities();
  res.send(cities).status(200);
}

export async function getCityAndUser(req: Request, res: Response) {
  const { userInfo } = res.locals;
  const infoCityAndUser = await mainPageServices.getCityAndUser(
    userInfo.userId
  );
  res.send(infoCityAndUser).status(200);
}

export async function getCitiesByState(req: Request, res: Response) {
  const stateId = +req.params.stateId;
  const cities = await mainPageServices.getCitiesByState(stateId);

  res.send(cities).status(200);
}
