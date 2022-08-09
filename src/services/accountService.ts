import { accountRepository } from "../repositories/accountRepository.js";

async function getUserInfoById(userId: number) {
  const user = await accountRepository.getUserInfoById(userId);

  return user;
}

export const accountService = {
  getUserInfoById,
};
