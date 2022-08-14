/* eslint-disable import/no-extraneous-dependencies */
import { jest } from "@jest/globals";
import { State } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { searchBarRepository } from "../../src/repositories/searchBarRepository.js";
import { searchBarServices } from "../../src/services/searchBarServices.js";

describe("SearchBar Service Unit Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it("should get the states", async () => {
    const states: State[] = [
      {
        id: 1,
        name: "Amazonas",
        initials: faker.lorem.word(),
        creat_at: faker.date.soon(),
      },
    ];

    jest
      .spyOn(searchBarRepository, "searchState")
      .mockResolvedValueOnce(states);

    const statesInfo = await searchBarServices.searchState("Amazonas");
    expect(statesInfo).toEqual(states);
  });
});
