import { Request, Response } from "express";
import { discoverCityServices } from "../services/discoverCityServices.js";

export async function getCityById(req: Request, res: Response) {
  const cityId = +req.params.cityId;

  const city = await discoverCityServices.getCityById(cityId);

  res.send(city).status(200);
}
