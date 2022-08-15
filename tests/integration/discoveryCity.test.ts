import supertest from "supertest";
import { prisma } from "../../src/config/database.js";
import app from "../../src/app.js";
import { authFactory } from "../facotories/authFactory.js";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE visits RESTART IDENTITY;`;
  await prisma.$executeRaw`TRUNCATE TABLE comments RESTART IDENTITY;`;
  await prisma.$executeRaw`TRUNCATE TABLE favorites RESTART IDENTITY;`;
  await prisma.$executeRaw`TRUNCATE TABLE likes RESTART IDENTITY;`;
  await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE;`;
});

describe("Discovery City Integration tests", () => {
  it("should return 200 - get city by id", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    const { token } = responseSI.body;
    const responseTests = await supertest(app)
      .get("/city/1")
      .send()
      .set("Authorization", `Bearer ${token}`);
    expect(responseTests.status).toBe(200);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
