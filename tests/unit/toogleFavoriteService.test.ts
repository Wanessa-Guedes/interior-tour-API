/* eslint-disable import/no-extraneous-dependencies */
import { jest } from "@jest/globals";
import { City, Favorite, Like, Visited } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { toogleFavoriteRespoitory } from "../../src/repositories/toogleFavoriteRepository.js";
import { toogleFavoriteService } from "../../src/services/toogleFavoriteServices.js";

describe("Toogle Favorite Service Unit Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it("should return not found for a city that do not exists (Post favorite)", async () => {
    jest
      .spyOn(toogleFavoriteRespoitory, "findCity")
      .mockResolvedValueOnce(null);

    await expect(toogleFavoriteService.postFavorite(1, 1)).rejects.toEqual({
      message: "City not registered!",
      type: "not_found",
    });
  });

  it("should Post favorite", async () => {
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
      .spyOn(toogleFavoriteRespoitory, "findCity")
      .mockResolvedValueOnce(city);

    await toogleFavoriteService.postFavorite(city.id, 1);
    expect(toogleFavoriteRespoitory.postFavorites).toBeCalled;
  });

  it("should return not found for a city that do not exists (Post Unfavorite)", async () => {
    jest
      .spyOn(toogleFavoriteRespoitory, "findCity")
      .mockResolvedValueOnce(null);

    await expect(toogleFavoriteService.postUnfavorite(1, 1)).rejects.toEqual({
      message: "City not registered!",
      type: "not_found",
    });
  });

  it("should Post Unfavorite", async () => {
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
      .spyOn(toogleFavoriteRespoitory, "findCity")
      .mockResolvedValueOnce(city);

    await toogleFavoriteService.postUnfavorite(city.id, 1);
    expect(toogleFavoriteRespoitory.postUnfavorites).toBeCalled;
  });

  it("should get the favorites cities", async () => {
    const cities: (Favorite & {
      city: City & {
        likes: Like[];
        favorites: Favorite[];
        visits: Visited[];
      };
    })[] = [
      {
        id: 5,
        creat_at: faker.date.soon(),
        userId: 1,
        cityId: 1,
        city: {
          id: 1,
          name: "Juiz de Fora",
          short_call: "Princesa de Minas",
          description:
            "Juiz de Fora oferece uma grande variedade de bares, além de passeios interessantes pela cidade, como visitas a museus, parques e o mirante no ponto mais alto, o Morro do Cristo",
          url_picture:
            "https://www.pjf.mg.gov.br/noticias/arquivo/1003_conferencia_seguranca_151452.jpg",
          creat_at: faker.date.soon(),
          stateId: 12,
          likes: [
            {
              id: 1,
              creat_at: faker.date.soon(),
              userId: 1,
              cityId: 1,
            },
          ],
          favorites: [
            {
              id: 5,
              creat_at: faker.date.soon(),
              userId: 1,
              cityId: 1,
            },
          ],
          visits: [],
        },
      },
    ];

    jest
      .spyOn(toogleFavoriteRespoitory, "getFavoriteCities")
      .mockResolvedValueOnce(cities);
    const favCities = await toogleFavoriteService.getFavoriteCities(1);
    expect(favCities).toEqual(cities);
  });
});
