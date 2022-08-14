/* eslint-disable import/no-extraneous-dependencies */
import { jest } from "@jest/globals";
import { User } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { accountRepository } from "../../src/repositories/accountRepository.js";
import { accountService } from "../../src/services/accountService.js";

describe("Account Service Unit Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it("should get users info according the id", async () => {
    const user: User = {
      id: 1,
      email: faker.internet.email(),
      passwordHash: faker.animal.dog(),
      profile_picture: faker.internet.url(),
      user_name: faker.name.firstName(),
      creat_at: faker.date.soon(),
    };
    jest
      .spyOn(accountRepository, "getUserInfoById")
      .mockResolvedValueOnce(user);

    const userInfo = await accountService.getUserInfoById(user.id);
    expect(userInfo).toEqual(user);
  });

  it("should return not found if the id dont belong to any user", async () => {
    const user: User = {
      id: 1,
      email: faker.internet.email(),
      passwordHash: faker.animal.dog(),
      profile_picture: faker.internet.url(),
      user_name: faker.name.firstName(),
      creat_at: faker.date.soon(),
    };
    jest
      .spyOn(accountRepository, "getUserInfoById")
      .mockResolvedValueOnce(null);

    await expect(accountService.getUserInfoById(user.id)).rejects.toEqual({
      message: "User not registered!",
      type: "not_found",
    });
  });
});
