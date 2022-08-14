/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import { jest } from "@jest/globals";
import { City } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { discoverCityRepository } from "../../src/repositories/discoverCityRepository.js";
import { discoverCityServices } from "../../src/services/discoverCityServices.js";

describe("Dicovery City Service Unit Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  // TODO

  it("should return not found in case the city is not registered", async () => {
    const city: City = {
      id: 1,
      name: faker.lorem.words(),
      short_call: faker.lorem.words(),
      description: faker.lorem.words(),
      url_picture: faker.internet.url(),
      creat_at: faker.date.soon(),
      stateId: 1,
    };
    jest
      .spyOn(discoverCityRepository, "getCityById")
      .mockResolvedValueOnce(null);

    await expect(discoverCityServices.getCityById(city.id)).rejects.toEqual({
      message: "City not registered!",
      type: "not_found",
    });
  });
});
