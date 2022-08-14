/* eslint-disable import/no-extraneous-dependencies */
import { jest } from "@jest/globals";
import { City } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { toogleVisitedRepository } from "../../src/repositories/toogleVisitedRepository.js";
import { toogleVisitedServices } from "../../src/services/toogleVisitedServices.js";

describe("Toogle Visited Service Unit Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it("should return not found for a city that do not exists (Post Visited)", async () => {
    jest.spyOn(toogleVisitedRepository, "findCity").mockResolvedValueOnce(null);

    await expect(toogleVisitedServices.postVisited(1, 1)).rejects.toEqual({
      message: "City not registered!",
      type: "not_found",
    });
  });

  it("should Post Visited", async () => {
    const city: City = {
      id: 1,
      name: faker.lorem.words(),
      short_call: faker.lorem.words(),
      description: faker.lorem.words(),
      url_picture: faker.internet.url(),
      creat_at: faker.date.soon(),
      stateId: 1,
    };

    jest.spyOn(toogleVisitedRepository, "findCity").mockResolvedValueOnce(city);

    await toogleVisitedServices.postVisited(city.id, 1);
    expect(toogleVisitedRepository.postVisited).toBeCalled;
  });

  it("should return not found for a city that do not exists (Post Unvisited)", async () => {
    jest.spyOn(toogleVisitedRepository, "findCity").mockResolvedValueOnce(null);

    await expect(toogleVisitedServices.postUnvisited(1, 1)).rejects.toEqual({
      message: "City not registered!",
      type: "not_found",
    });
  });

  it("should Post Unvisited", async () => {
    const city: City = {
      id: 1,
      name: faker.lorem.words(),
      short_call: faker.lorem.words(),
      description: faker.lorem.words(),
      url_picture: faker.internet.url(),
      creat_at: faker.date.soon(),
      stateId: 1,
    };

    jest.spyOn(toogleVisitedRepository, "findCity").mockResolvedValueOnce(city);

    await toogleVisitedServices.postUnvisited(city.id, 1);
    expect(toogleVisitedRepository.postUnvisited).toBeCalled;
  });
});
