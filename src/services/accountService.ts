import { accountRepository } from "../repositories/accountRepository.js";

async function getUserInfoById(userId: number) {
  const user = await accountRepository.getUserInfoById(userId);
  if (!user) {
    throw {
      type: "not_found",
      message: "User not registered!",
    };
  }

  return user;
}

export const accountService = {
  getUserInfoById,
};
