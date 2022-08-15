import supertest from "supertest";
import { prisma } from "../../src/config/database.js";
import app from "../../src/app.js";
import { authFactory } from "../facotories/authFactory.js";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE favorites RESTART IDENTITY;`;
  await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE;`;
});

describe("Favorites Integration tests", () => {
  it("should return 200 - Post Favorite", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    const { token } = responseSI.body;
    const responseTests = await supertest(app)
      .post("/main/1/favorite")
      .send()
      .set("Authorization", `Bearer ${token}`);
    expect(responseTests.status).toBe(200);
  });

  it("should return 401 - unauthorized post favorite", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    // eslint-disable-next-line no-unused-vars
    const { token } = responseSI.body;
    const responseTests = await supertest(app).post("/main/1/favorite").send();
    expect(responseTests.status).toBe(401);
  });

  it("should return 200 - Post Unfavorite", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    const { token } = responseSI.body;
    await supertest(app)
      .post("/main/1/favorite")
      .send()
      .set("Authorization", `Bearer ${token}`);
    const responseTests = await supertest(app)
      .post("/main/1/unfavorite")
      .send()
      .set("Authorization", `Bearer ${token}`);
    expect(responseTests.status).toBe(200);
  });

  it("should return 401 - unauthorized post Unfavorite", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    // eslint-disable-next-line no-unused-vars
    const { token } = responseSI.body;
    const responseTests = await supertest(app)
      .post("/main/1/unfavorite")
      .send();
    expect(responseTests.status).toBe(401);
  });

  it("should return 200 - get favorites cities", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    const { token } = responseSI.body;
    const responseTests = await supertest(app)
      .get("/main/favorites")
      .set("Authorization", `Bearer ${token}`);
    expect(responseTests.status).toBe(200);
  });

  it("should return 401 - unauthorized get favorites cities", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    // eslint-disable-next-line no-unused-vars
    const { token } = responseSI.body;
    const responseTests = await supertest(app).get("/main/favorites");
    expect(responseTests.status).toBe(401);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
