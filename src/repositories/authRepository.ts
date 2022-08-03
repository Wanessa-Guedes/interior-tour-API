import { prisma } from "../config/database.js";
import { CreateDataUser, CreteInfoSignIn } from "../interfaces/createData.js";

async function createUser(userData: CreateDataUser) {
  await prisma.user.create({ data: userData });
}

async function checkRegisteredEmail(userData: CreteInfoSignIn) {
  const isEmailRegistered = await prisma.user.findUnique({
    where: { email: userData.email },
  });

  return isEmailRegistered;
}

export const authRepository = {
  createUser,
  checkRegisteredEmail,
};
