import supertest from "supertest";
import { prisma } from "../../src/config/database.js";
import app from "../../src/app.js";
import { authFactory } from "../facotories/authFactory.js";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE;`;
});

describe("Account Integration tests", () => {
  it("should return users info", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    const { token } = responseSI.body;
    const responseTests = await supertest(app)
      .get("/infoaccount")
      .send()
      .set("Authorization", `Bearer ${token}`);
    expect(responseTests.status).toBe(200);
  });

  it("should return unathorized if token was not send", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    // eslint-disable-next-line no-unused-vars
    const { token } = responseSI.body;
    const responseTests = await supertest(app).get("/infoaccount").send();
    expect(responseTests.status).toBe(401);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
