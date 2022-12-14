import { Router } from "express";
import { getUserInfoById } from "../controllers/accountController.js";
import { validateToken } from "../middlewares/tokenValidator.js";

const accountRouter = Router();

accountRouter.get("/infoaccount", validateToken, getUserInfoById);

export default accountRouter;
