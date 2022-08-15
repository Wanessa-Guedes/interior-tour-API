import supertest from "supertest";
import { prisma } from "../../src/config/database.js";
import app from "../../src/app.js";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE;`;
});

describe("Discovery City Integration tests", () => {
  it("should return 200 - get city", async () => {
    const responseTests = await supertest(app).get("/main");
    expect(responseTests.status).toBe(200);
  });

  it("should return 200 - get city by state", async () => {
    const responseTests = await supertest(app).get("/state/1/cities");
    expect(responseTests.status).toBe(200);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
