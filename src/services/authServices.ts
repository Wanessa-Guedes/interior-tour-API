import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { CreateDataUser, CreteInfoSignIn } from "../interfaces/createData.js";
import { authRepository } from "../repositories/authRepository.js";

dotenv.config;

const hash = 10;

async function signUp(userData: CreateDataUser) {
  userData.email = userData.email.toLowerCase();
  const password = userData.passwordHash;
  const isEmailRegistered = await authRepository.checkRegisteredEmail(userData);
  if (isEmailRegistered) {
    throw {
      type: "conflict",
      message: "Email already registered",
    };
  }

  userData.passwordHash = bcrypt.hashSync(password, hash);

  await authRepository.createUser(userData);
}

async function signIn(userData: CreteInfoSignIn) {
  const user = await authRepository.checkRegisteredEmail(userData);
  if (!user) {
    throw {
      type: "not_found",
      message: "User not registered!",
    };
  }

  if (!bcrypt.compareSync(userData.passwordHash, user.passwordHash)) {
    throw {
      type: "unauthorized",
      message: "Incorrect password",
    };
  }

  const secretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign({ id: user.id, email: user.email }, secretKey);

  return { token, user };
}

export const authService = {
  signUp,
  signIn,
};
