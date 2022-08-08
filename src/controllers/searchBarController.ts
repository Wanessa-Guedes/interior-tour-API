import { Request, Response } from "express";
import { searchBarServices } from "../services/searchBarServices.js";

export async function searchBar(req: Request, res: Response) {
  const stateName = req.body.state;
  const states = await searchBarServices.searchState(stateName);
  res.send(states).status(200);
}
