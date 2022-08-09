import { Request, Response } from "express";
import { accountService } from "../services/accountService.js";

export async function getUserInfoById(req: Request, res: Response) {
  const { userInfo } = res.locals;

  const user = await accountService.getUserInfoById(userInfo.userId);
  delete user.passwordHash;
  delete user.creat_at;

  res.send(user).status(200);
}
