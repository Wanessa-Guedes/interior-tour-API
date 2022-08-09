import { Router } from "express";
import { getUserInfoById } from "../controllers/accountController.js";
import { validateToken } from "../middlewares/tokenValidator.js";

const accountRouter = Router();

accountRouter.get("/infoaccount", validateToken, getUserInfoById);
// accountRouter.post("/sign-up", schemaValidator(authSchema.signUpSchema), signUp);

export default accountRouter;
