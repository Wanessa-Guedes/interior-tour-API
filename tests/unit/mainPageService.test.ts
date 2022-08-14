/* eslint-disable import/no-extraneous-dependencies */
import { jest } from "@jest/globals";
import { State, City, Like, Favorite, Visited } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { mainPageRepository } from "../../src/repositories/mainPageRepository.js";
import { mainPageServices } from "../../src/services/mainPageservice.js";

describe("Main Page Service Unit Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it("should get Cities info", async () => {
    const cities: (City & {
      likes: Like[];
      favorites: Favorite[];
      visits: Visited[];
    })[] = [
      {
        id: 1,
        name: faker.lorem.words(),
        short_call: faker.lorem.words(),
        description: faker.lorem.words(),
        url_picture: faker.internet.url(),
        creat_at: faker.date.soon(),
        stateId: 1,
        likes: [],
        favorites: [],
        visits: [],
      },
    ];

    jest.spyOn(mainPageRepository, "getCities").mockResolvedValueOnce(cities);

    const cityInfo = await mainPageServices.getCities();
    expect(cityInfo).toEqual(cities);
  });

  it("should return not found if the id dont belong to state ", async () => {
    const cities: (State & {
      cities: (City & {
        likes: Like[];
        favorites: Favorite[];
        visits: Visited[];
      })[];
    })[] = [];

    jest
      .spyOn(mainPageRepository, "getCitiesByState")
      .mockResolvedValueOnce(cities);

    await expect(mainPageServices.getCitiesByState(1)).rejects.toEqual({
      message: "Any city found!",
      type: "not_found",
    });
  });

  it("should return city ", async () => {
    const cities: (State & {
      cities: (City & {
        likes: Like[];
        favorites: Favorite[];
        visits: Visited[];
      })[];
    })[] = [
      {
        id: 2,
        name: "Alagoas",
        initials: "AL",
        creat_at: faker.date.soon(),
        cities: [],
      },
    ];

    jest
      .spyOn(mainPageRepository, "getCitiesByState")
      .mockResolvedValueOnce(cities);
    const data = await mainPageServices.getCitiesByState(2);
    expect(data).toEqual(cities);
  });
});
