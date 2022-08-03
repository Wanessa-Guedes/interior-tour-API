import { Request, Response } from "express";
import { mainPageServices } from "../services/mainPageservice.js";

export async function getCities(req: Request, res: Response) {
  const cities = await mainPageServices.getCities();
  res.send({ cities }).status(200);
}

export async function getCityAndUser(req: Request, res: Response) {
  const id = +req.params;
  const infoCityAndUser = await mainPageServices.getCityAndUser(id);
  res.send(infoCityAndUser).status(200);
}
