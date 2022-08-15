import supertest from "supertest";
import { prisma } from "../../src/config/database.js";
import app from "../../src/app.js";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE;`;
});

describe("Search Bar Integration tests", () => {
  it("should return 200 - get states", async () => {
    const responseTests = await supertest(app)
      .post("/searchstate")
      .send({ state: "Minas Gerais" });
    expect(responseTests.status).toBe(200);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
