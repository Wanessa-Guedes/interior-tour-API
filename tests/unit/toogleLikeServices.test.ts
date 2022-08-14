/* eslint-disable import/no-extraneous-dependencies */
import { jest } from "@jest/globals";
import { City } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { toogleLikeRepository } from "../../src/repositories/toogleLikeRepository.js";
import { toogleLikeServices } from "../../src/services/toogleLikeServices.js";

describe("Toogle Like Service Unit Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it("should return not found for a city that do not exists (Post Like)", async () => {
    jest.spyOn(toogleLikeRepository, "findCity").mockResolvedValueOnce(null);

    await expect(toogleLikeServices.postLike(1, 1)).rejects.toEqual({
      message: "City not registered!",
      type: "not_found",
    });
  });

  it("should Post Like", async () => {
    const city: City = {
      id: 1,
      name: faker.lorem.words(),
      short_call: faker.lorem.words(),
      description: faker.lorem.words(),
      url_picture: faker.internet.url(),
      creat_at: faker.date.soon(),
      stateId: 1,
    };

    jest.spyOn(toogleLikeRepository, "findCity").mockResolvedValueOnce(city);

    await toogleLikeServices.postLike(city.id, 1);
    expect(toogleLikeRepository.postLike).toBeCalled;
  });

  it("should return not found for a city that do not exists (Post Dislike)", async () => {
    jest.spyOn(toogleLikeRepository, "findCity").mockResolvedValueOnce(null);

    await expect(toogleLikeServices.postDislike(1, 1)).rejects.toEqual({
      message: "City not registered!",
      type: "not_found",
    });
  });

  it("should Post Dislike", async () => {
    const city: City = {
      id: 1,
      name: faker.lorem.words(),
      short_call: faker.lorem.words(),
      description: faker.lorem.words(),
      url_picture: faker.internet.url(),
      creat_at: faker.date.soon(),
      stateId: 1,
    };

    jest.spyOn(toogleLikeRepository, "findCity").mockResolvedValueOnce(city);

    await toogleLikeServices.postDislike(city.id, 1);
    expect(toogleLikeRepository.postDislike).toBeCalled;
  });
});
