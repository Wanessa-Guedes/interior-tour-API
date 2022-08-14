/* eslint-disable import/no-extraneous-dependencies */
import { jest } from "@jest/globals";
import { User } from "@prisma/client";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";
import { CreateDataUser } from "../../src/interfaces/createData.js";
import { authRepository } from "../../src/repositories/authRepository.js";
import { authService } from "../../src/services/authServices.js";

describe("Auth Services unit test", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it("should return conflict if try register an email already registered", async () => {
    const user: User = {
      id: 1,
      email: faker.internet.email(),
      passwordHash: faker.animal.dog(),
      profile_picture: faker.internet.url(),
      user_name: faker.name.firstName(),
      creat_at: faker.date.soon(),
    };

    const userData: CreateDataUser = {
      email: user.email,
      passwordHash: user.passwordHash,
      profile_picture: user.profile_picture,
      user_name: user.user_name,
    };
    jest
      .spyOn(authRepository, "checkRegisteredEmail")
      .mockResolvedValueOnce(user);
    await expect(authService.signUp(userData)).rejects.toEqual({
      message: "Email already registered",
      type: "conflict",
    });
  });

  it("should create an user", async () => {
    const user: User = {
      id: 1,
      email: faker.internet.email(),
      passwordHash: faker.animal.dog(),
      profile_picture: faker.internet.url(),
      user_name: faker.name.firstName(),
      creat_at: faker.date.soon(),
    };

    const userData: CreateDataUser = {
      email: user.email,
      passwordHash: user.passwordHash,
      profile_picture: user.profile_picture,
      user_name: user.user_name,
    };
    jest
      .spyOn(authRepository, "checkRegisteredEmail")
      .mockResolvedValueOnce(null);
    jest.spyOn(bcrypt, "hashSync").mockImplementationOnce(() => "HASH_MOCKADO");
    const result = await authService.signUp(userData);
    expect(result).toBeCalled;
  });

  it("should return not found if an email was not registered yet", async () => {
    const user: User = {
      id: 1,
      email: faker.internet.email(),
      passwordHash: faker.animal.dog(),
      profile_picture: faker.internet.url(),
      user_name: faker.name.firstName(),
      creat_at: faker.date.soon(),
    };

    const userData: CreateDataUser = {
      email: user.email,
      passwordHash: user.passwordHash,
      profile_picture: user.profile_picture,
      user_name: user.user_name,
    };
    jest
      .spyOn(authRepository, "checkRegisteredEmail")
      .mockResolvedValueOnce(null);
    await expect(authService.signIn(userData)).rejects.toEqual({
      message: "User not registered!",
      type: "not_found",
    });
  });

  it("should return unauthorized if the email is not the same registered", async () => {
    const user: User = {
      id: 1,
      email: faker.internet.email(),
      passwordHash: faker.animal.dog(),
      profile_picture: faker.internet.url(),
      user_name: faker.name.firstName(),
      creat_at: faker.date.soon(),
    };

    const userData: CreateDataUser = {
      email: user.email,
      passwordHash: user.passwordHash,
      profile_picture: user.profile_picture,
      user_name: user.user_name,
    };
    jest
      .spyOn(authRepository, "checkRegisteredEmail")
      .mockResolvedValueOnce(user);
    jest.spyOn(bcrypt, "compareSync").mockImplementationOnce(() => false);
    await expect(authService.signIn(userData)).rejects.toEqual({
      message: "Incorrect password",
      type: "unauthorized",
    });
  });
});
