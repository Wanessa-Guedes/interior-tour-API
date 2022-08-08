import { Router } from "express";
import { searchBar } from "../controllers/searchBarController.js";

const searchBarRouter = Router();

searchBarRouter.post("/searchstate", searchBar);

export default searchBarRouter;
