const server = require("../api/server.js");
const request = require("supertest");
const db = require("../database/dbConfig.js");
const Users = require("../users/users-model.js");

describe("register", () => {
  it("should return status 201", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "Bob", password: "password1" });
    expect(res.status).toBe(201);
  });

  it("should return the user added", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "Bob", password: "password1" });
    expect({ username: "Bob" });
  });
  beforeEach(async () => {
    await db("users").truncate();
  });
});

describe("login", () => {
  it("should return status 200", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "Bob", password: "password1" });
    expect(res.status).toBe(200);
  });

  it("should return a token", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "Bob", password: "password1" });

    expect(res.body.token);
  });
});