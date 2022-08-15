import supertest from "supertest";
import { prisma } from "../../src/config/database.js";
import app from "../../src/app.js";
import { authFactory } from "../facotories/authFactory.js";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE comments RESTART IDENTITY;`;
  await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE;`;
});

describe("Comments Integration tests", () => {
  it("should return 201 - insert comment", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    const { token } = responseSI.body;
    const responseTests = await supertest(app)
      .post("/infocity/insertComment/1")
      .send({ comment: "Linda" })
      .set("Authorization", `Bearer ${token}`);
    expect(responseTests.status).toBe(201);
  });

  it("should return 422 - not body comment insert comment", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    const { token } = responseSI.body;
    const responseTests = await supertest(app)
      .post("/infocity/insertComment/1")
      .send()
      .set("Authorization", `Bearer ${token}`);
    expect(responseTests.status).toBe(422);
  });

  it("should return 401 - unauthorized insert comment", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    // eslint-disable-next-line no-unused-vars
    const { token } = responseSI.body;
    const responseTests = await supertest(app)
      .post("/infocity/insertComment/1")
      .send({ comment: "Linda" });
    expect(responseTests.status).toBe(401);
  });

  it("should return 200 - update comment", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    const { token } = responseSI.body;
    await supertest(app)
      .post("/infocity/insertComment/1")
      .send({ comment: "Linda" })
      .set("Authorization", `Bearer ${token}`);
    const responseUp = await supertest(app)
      .put("/infocity/update/1")
      .send({ comment: "Linda mesmo" })
      .set("Authorization", `Bearer ${token}`);
    expect(responseUp.status).toBe(200);
  });

  it("should return 422 - not body comment update comment", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    const { token } = responseSI.body;
    await supertest(app)
      .post("/infocity/insertComment/1")
      .send({ comment: "Linda" })
      .set("Authorization", `Bearer ${token}`);
    const responseUp = await supertest(app)
      .put("/infocity/update/1")
      .send()
      .set("Authorization", `Bearer ${token}`);
    expect(responseUp.status).toBe(422);
  });

  it("should return 401 - unauthorized update comment", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    // eslint-disable-next-line no-unused-vars
    const { token } = responseSI.body;
    await supertest(app)
      .post("/infocity/insertComment/1")
      .send({ comment: "Linda" })
      .set("Authorization", `Bearer ${token}`);
    const responseUp = await supertest(app)
      .put("/infocity/update/1")
      .send({ comment: "Linda" });
    expect(responseUp.status).toBe(401);
  });

  it("should return 200 - get comments city", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    const { token } = responseSI.body;
    const responseTests = await supertest(app)
      .get("/infocity/comments/1")
      .set("Authorization", `Bearer ${token}`);
    expect(responseTests.status).toBe(200);
  });

  it("should return 401 - unauthorized get city comments", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    // eslint-disable-next-line no-unused-vars
    const { token } = responseSI.body;
    const responseTests = await supertest(app).get("/infocity/comments/1");
    expect(responseTests.status).toBe(401);
  });

  it("should return 200 - delete comment", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    const { token } = responseSI.body;
    await supertest(app)
      .post("/infocity/insertComment/1")
      .send({ comment: "Linda" })
      .set("Authorization", `Bearer ${token}`);
    const responseDel = await supertest(app)
      .delete("/infocity/delete/1")
      .set("Authorization", `Bearer ${token}`);
    expect(responseDel.status).toBe(200);
  });

  it("should return 401 - unauthorized delete comments", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmpassword;
    delete user.profilepicture;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    // eslint-disable-next-line no-unused-vars
    const { token } = responseSI.body;
    await supertest(app)
      .post("/infocity/insertComment/1")
      .send({ comment: "Linda" })
      .set("Authorization", `Bearer ${token}`);
    const responseDel = await supertest(app).delete("/infocity/delete/1");
    expect(responseDel.status).toBe(401);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
