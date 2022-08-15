import supertest from "supertest";
import { prisma } from "../../src/config/database.js";
import app from "../../src/app.js";
import { authFactory } from "../facotories/authFactory.js";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE visits RESTART IDENTITY;`;
  await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE;`;
});

describe("Visits Integration tests", () => {
  it("should return 200 - Post Visited", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    const { token } = responseSI.body;
    const responseTests = await supertest(app)
      .post("/main/1/visited")
      .send()
      .set("Authorization", `Bearer ${token}`);
    expect(responseTests.status).toBe(200);
  });

  it("should return 401 - unauthorized post visited", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    // eslint-disable-next-line no-unused-vars
    const { token } = responseSI.body;
    const responseTests = await supertest(app).post("/main/1/visited").send();
    expect(responseTests.status).toBe(401);
  });

  it("should return 200 - Post UnVisited", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    const { token } = responseSI.body;
    await supertest(app)
      .post("/main/1/visited")
      .send()
      .set("Authorization", `Bearer ${token}`);
    const responseTests = await supertest(app)
      .post("/main/1/unvisited")
      .send()
      .set("Authorization", `Bearer ${token}`);
    expect(responseTests.status).toBe(200);
  });

  it("should return 401 - unauthorized post Unvisited", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    // eslint-disable-next-line no-unused-vars
    const { token } = responseSI.body;
    const responseTests = await supertest(app).post("/main/1/unvisited").send();
    expect(responseTests.status).toBe(401);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
