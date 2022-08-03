import { Request, Response } from "express";
import { CreateDataUser, CreteInfoSignIn } from "../interfaces/createData.js";
import { authService } from "../services/authServices.js";

export async function signUp(req: Request, res: Response) {
  const userInfo: CreateDataUser = {
    email: req.body.email,
    passwordHash: req.body.password,
    profile_picture: req.body.profilePicture,
    user_name: req.body.userName,
  };

  await authService.signUp(userInfo);

  res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
  const userInfo: CreteInfoSignIn = {
    email: req.body.email,
    passwordHash: req.body.password,
  };
  const token = await authService.signIn(userInfo);

  res.status(200).send({ token });
}
